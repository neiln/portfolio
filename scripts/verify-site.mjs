import { chromium } from "playwright";

const origin = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000";
const paths = ["/", "/projects", "/engineering-impact", "/leadership", "/about", "/contact", "/projects/crowhub", "/projects/bizlink", "/projects/qr-generator", "/projects/vendor-hub"];
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage();
const errors = [];
const checked = new Set();
let linkCount = 0;
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });

try {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(`${origin}${path}`, { waitUntil: "networkidle" });
      if (response.status() !== 200) throw new Error(`${path}: HTTP ${response.status()}`);
      if (await page.locator("h1").count() !== 1) throw new Error(`${path}: expected one primary heading`);
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`${path}: horizontal overflow at ${width}px`);
      const titles = await page.locator("svg[role=img] title").allTextContents();
      if (titles.some((title) => !title.trim())) throw new Error(`${path}: an architecture diagram has no accessible title`);
      if (width !== 768) continue;
      const hrefs = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")));
      for (const href of hrefs) {
        const url = new URL(href, `${origin}${path}`);
        if (url.origin !== new URL(origin).origin) continue;
        linkCount++;
        const key = `${url.pathname}${url.hash}`;
        if (checked.has(key)) continue;
        checked.add(key);
        const target = await page.request.get(`${origin}${url.pathname}`);
        if (!target.ok()) throw new Error(`Broken internal link: ${key} (${target.status()})`);
        if (url.hash) {
          const html = await target.text();
          if (!html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) throw new Error(`Missing anchor target: ${key}`);
        }
      }
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(origin, { waitUntil: "networkidle" });
  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  if (scrollBehavior !== "auto") throw new Error("Reduced motion must disable smooth scrolling");
  if (errors.length) throw new Error(`Browser errors: ${errors.join("; ")}`);
  console.log(JSON.stringify({ routes: paths.length, viewports: [375, 768, 1440], internalLinks: linkCount, uniqueLinkTargets: checked.size, browserErrors: errors.length, reducedMotion: "passed" }, null, 2));
} finally {
  await browser.close();
}
