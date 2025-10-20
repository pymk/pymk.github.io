# pymk.dev

Personal website and blog powered by [Zola](https://github.com/getzola/zola) static site generator.

## Setup

**Theme**: Modified [no-style-please](https://github.com/atgumx/no-style-please) theme

**Deployment**: GitHub Actions workflow builds and deploys to GitHub Pages

**Modification**: `templates/section.html` filters posts with `private` category from `/posts/` listing

> [!TIP]
> When using a theme, create a symlink in the `templates/` directory for GitHub Actions deployment. See [this discussion](https://github.com/shalzz/zola-deploy-action/issues/76#issuecomment-1638917318).

---

## Post Categories Reference

Posts use a single category to define their primary content type:

| Category | Description | Use For |
|----------|-------------|---------|
| `private` | Personal posts hidden from main listing | Travel logs, personal updates, life events |
| `tutorial` | Step-by-step instructional guides | How-to guides, walkthroughs, setup instructions |
| `project` | Project showcases and implementations | Code projects, packages, tools built |
| `opinion` | Thoughts, reflections, and commentary | Book notes, opinions, workplace thoughts |
| `guide` | Reference materials and documentation | Setup guides, configuration references |
