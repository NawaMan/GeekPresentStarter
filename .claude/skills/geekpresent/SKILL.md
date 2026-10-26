---
name: geekpresent
description: Author slides, decks and pages with GeekPresent — adding or editing a slide, a deck, a diagram, code, charts, animation, speaker notes or any GeekPresent component. Use before writing anything under src/routes/.
---

# GeekPresent authoring

This site is built on GeekPresent (`@geekpresent/core`). Its authoring guide ships inside the
installed package and matches its version exactly:

1. Read `node_modules/@geekpresent/core/guide/README.md` first — how a deck and a slide are laid
   out, the rules that break builds, styling, testing, and an index of every component.
2. Before using a component, read its group file in the same folder (`slide-pages.md`,
   `layout.md`, `content.md`, `code.md`, `media.md`, `data.md`, `draw.md`, `features.md`).
3. When the guide and the component source disagree, the source wins:
   `node_modules/@geekpresent/core/src/…`.

The checks that catch most mistakes:

- A new slide is a folder `src/routes/<deck>/<name>.html/` with BOTH `+page.svelte` and
  `+layout.js`, and an entry in that deck's `pages.ts`.
- Assets are imported from next to the slide; links are relative; nothing needs a server.
- Finish with `scripts/test.sh` and `scripts/build.sh` (or `pnpm test` / `pnpm build` without a
  booth), and give the author the dev-server URL of the slide to look at.
