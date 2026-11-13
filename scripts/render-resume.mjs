// Renders resume/resume.html to public/resume/Neil_Nelson_EM_Resume.pdf using installed Chrome.
import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
await page.goto("file://" + path.join(root, "resume", "resume.html"));
await page.pdf({ path: path.join(root, "public", "resume", "Neil_Nelson_EM_Resume.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("Rendered public/resume/Neil_Nelson_EM_Resume.pdf");
