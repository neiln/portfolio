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

test("source-reviewed projects do not imply verified deployment", async () => {
  const { projects, getProject } = await import("../src/content/projects");
  for (const project of projects.filter((p) => p.slug !== "crowhub")) {
    assert.equal(project.deploymentVerified, false);
    assert.notEqual(project.status, "In production");
  }
  assert.equal(getProject("missing-project"), undefined);
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
