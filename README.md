# GeekPresent Starter

A ready-to-use site for presentations built with [GeekPresent](https://github.com/NawaMan/GeekPresent):
slides written in HTML, CSS and Svelte, each slide a page of a static site you can host anywhere.

GeekPresent itself comes in as a package (`@geekpresent/core`), downloaded from a GitHub Release —
this repo holds only **your** slides and settings. See the
[showcase](https://nawaman.github.io/GeekPresent/) for what the framework can do.

## Write it with your AI agent

GeekPresent is built to be authored with a coding agent — Claude Code, Cursor, Codex, Copilot.
Every slide is a small text file, and the framework ships a guide written for the agent, at
`node_modules/@geekpresent/core/guide/`: how the site fits together, every component, the traps.
This repo already points agents at it (`AGENTS.md`, and a Claude Code skill in `.claude/skills/`),
so you can just ask:

> *Make me a 6-slide deck about our Q3 migration — a title, the problem, a diagram of the old and
> new architecture with arrows, a chart of the error rate, and a closing slide with a QR code.*

Then open the dev server, look, and keep asking. Things the agent placed can be dragged into
place in the browser (**ADJUST**), and **SAVE** writes your drag back into the source.

## Start

1. **Use this template** (the green button above) to make your own repo.
2. In your new repo: **Settings → Pages → Source: GitHub Actions**.
3. **Actions → Deploy to GitHub Pages → Run workflow** (after that, every push to `main` deploys).

Your site is at `https://<you>.github.io/<repo>/`, the sample deck at `…/slides/title.html`.

## Work on it locally

With [CodingBooth](https://github.com/NawaMan/CodingBooth) (needs only Docker — Node and pnpm are
inside the booth):

```bash
just dev          # or: scripts/dev.sh — prints the URL to open
scripts/test.sh   # tests
scripts/check.sh  # type-check
just build        # the static site, into build/
```

With your own Node (22+) and pnpm:

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```

## Make it yours

| What | Where |
| --- | --- |
| Site name, description, copyright | `geekpresent.config.ts` |
| The landing page | `src/routes/(home)/+page.svelte` |
| The deck — slide order and titles | `src/routes/slides/pages.ts` |
| A slide | `src/routes/slides/<name>.html/+page.svelte` (+ its `+layout.js`) |
| Deck look: size, font size, options | `src/routes/slides/+layout.svelte` |

**Add a slide:** copy `src/routes/slides/content.html/` to `<name>.html/`, edit its
`+page.svelte`, and add `{ path: '<name>.html', title: '…' }` to `pages.ts`.

**Another deck:** copy `src/routes/slides/` to `src/routes/<deck>/` and trim it.

Components are imported from the package — `@geekpresent/core/components/…`,
`@geekpresent/core/templates/…`. The [showcase decks](https://nawaman.github.io/GeekPresent/)
show every one, and their source is in the
[GeekPresent repo](https://github.com/NawaMan/GeekPresent/tree/main/src/routes).

## Upgrade GeekPresent

Change the version in the `@geekpresent/core` URL in `package.json` (it appears twice) to a newer
[release](https://github.com/NawaMan/GeekPresent/releases), then `scripts/install.sh --no-frozen-lockfile`
(or `pnpm install`).

## Change the framework itself

`pnpm patch @geekpresent/core` opens a copy to edit; `pnpm patch-commit <dir>` saves your change
as a diff under `patches/`. It is reapplied on every install and upgrade, and the install fails
loudly if an upgrade changed the same lines.

## Not on GitHub Pages?

`pnpm build` writes a plain static site to `build/` — upload it anywhere. Served from a sub-path
(`https://example.com/talks/`), build with `GEEKPRESENT_BASE_PATH=/talks`. Set `siteUrl` in
`geekpresent.config.ts` (or `GEEKPRESENT_SITE_URL`) to the full address for the SEO tags.

## License

MIT — see [LICENSE](LICENSE).
