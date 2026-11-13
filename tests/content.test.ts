import assert from "node:assert/strict";
import { test } from "node:test";

test("public project links never expose a private repository", async () => {
  const { projects } = await import("../src/content/projects");
  assert.equal(projects.length, 4);
  for (const project of projects) {
    if (project.repositoryVisibility === "private") assert.equal(project.githubUrl, undefined);
    for (const url of [project.githubUrl, project.liveUrl].filter(Boolean)) {
      assert.equal(new URL(url!).protocol, "https:");
      assert.ok(!url!.includes("example.com"));
    }
  }
});

test("only projects with a live URL are marked Live, and the featured project is live with screenshots", async () => {
  const { projects, featuredProject, otherProjects, getProject } = await import("../src/content/projects");
  for (const project of projects) {
    assert.equal(project.status === "Live", Boolean(project.liveUrl), project.slug);
  }
  assert.equal(featuredProject.status, "Live");
  assert.ok(featuredProject.screenshots.length >= 3);
  assert.equal(otherProjects.length, projects.length - 1);
  assert.equal(getProject("missing-project"), undefined);
});

test("rendered content does not carry audit language", async () => {
  const { projects } = await import("../src/content/projects");
  const { impact, experience } = await import("../src/content/career");
  const text = JSON.stringify({ projects, impact, experience }).toLowerCase();
  for (const phrase of ["remain to be", "not independently verified", "supplied brief", "no claim", "source reviewed", "has not been verified", "unverified"]) {
    assert.ok(!text.includes(phrase), `found "${phrase}"`);
  }
});

test("canonical origin is optional and rejects invalid or insecure configuration", async () => {
  const { resolveSiteUrl } = await import("../src/content/site");
  assert.equal(resolveSiteUrl(undefined), undefined);
  assert.equal(resolveSiteUrl(""), undefined);
  assert.equal(resolveSiteUrl("not-a-url"), undefined);
  assert.equal(resolveSiteUrl("javascript:alert(1)"), undefined);
  assert.equal(resolveSiteUrl("http://portfolio.invalid"), undefined);
  assert.equal(resolveSiteUrl("https://portfolio.invalid/path?query=yes"), "https://portfolio.invalid");
});
