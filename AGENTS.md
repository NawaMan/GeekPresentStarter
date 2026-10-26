# AGENTS.md — working on this site

A presentation site built on GeekPresent, which comes in as a package (`@geekpresent/core`, a
tarball from a GitHub Release — not npm). This repo holds the slides and settings only.

## Running things

If `./booth` works here (Docker present), run everything through it — the host may have no Node:
`scripts/dev.sh` (dev server; prints the URL), `scripts/test.sh`, `scripts/check.sh`,
`scripts/build.sh`, `scripts/install.sh`. Each script re-runs itself in the booth. Without a booth,
use `pnpm dev` / `pnpm test` / `pnpm check` / `pnpm build`.

## How it is laid out

- **A deck is a route folder** (`src/routes/slides/`). Its `pages.ts` lists the slides in order —
  the nav arrows and the table of contents read it. Its `+layout.svelte` wraps `<SlideDeck>` and
  calls `setPages(pages)`.
- **A slide is a folder** `src/routes/<deck>/<name>.html/` with BOTH `+page.svelte` and
  `+layout.js` (`export const prerender = true; export const trailingSlash = "never";`). Without
  `+layout.js` the build breaks or links 404. Add it to `pages.ts` — a folder missing there is an
  orphan.
- Slides are authored on a fixed **1920×1080** canvas; the deck scales it to the window.
- **Import from the package:** `@geekpresent/core/components/X.svelte`,
  `@geekpresent/core/templates/TitlePage.svelte` (also `ContentPage`, `AppendixPage`),
  `@geekpresent/core/draw`, `@geekpresent/core/presentation`.
- **Put a slide's images next to it and `import` them** — never a hard-coded `/x.png`, which
  breaks under the GitHub Pages sub-path.
- **Links between pages are relative** (`./other.html`, `../text.html`), never `/…`, for the same
  reason. A root page that writes `../` leaves the site.
- Site-wide settings are in `geekpresent.config.ts`. Never edit files under `node_modules/`; to
  change the framework, use `pnpm patch @geekpresent/core`.
- The site is fully static (adapter-static, everything prerendered). No `+server` endpoints at
  runtime, no `load` that needs a server, no form actions.
- `src/routes/_handout`, `_recorder`, `_source-edit`, `robots.txt`, `sitemap.xml` are framework
  stubs copied from the package — leave them.

## Where the documentation is

GeekPresent's full authoring manual — every component, ADJUST mode, the presenter console,
diagrams, animation, testing — is its `AGENTS.md`:
https://github.com/NawaMan/GeekPresent/blob/main/AGENTS.md (skip its parts about working ON the
framework: the booth rules, worktrees, releases). The package's own setup notes are
`node_modules/@geekpresent/core/README.md`. The sample decks under `src/routes/` there are the best
examples (in that repo `$lib/…` is `@geekpresent/core/…` here).

## Tests

`tests/*.ssr.test.ts` render a slide through `svelte/server` (what prerendering does). A slide
using the nav bar needs SvelteKit's `page` store stubbed — see `tests/slides.ssr.test.ts`.
`tests/*.test.ts` (no `.ssr`) run in jsdom.
