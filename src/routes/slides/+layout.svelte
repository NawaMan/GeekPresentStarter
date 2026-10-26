<!--
  The deck shell. <SlideDeck> owns the canvas, scaling, navigation, table of contents and
  SEO; this file picks the frame and publishes the slide list.

  Optional knobs: baseFontSize (the typography lever), annotate (a pen for the speaker),
  capture (save a slide as a PNG), kiosk (run unattended), fadeChrome.
-->
<script lang="ts">
	import SlideDeck from '@geekpresent/core/components/SlideDeck.svelte';
	import { setPages } from '@geekpresent/core/presentation';
	import { pages } from './pages';

	// The slides read the list from THIS layout's context, so it is set here.
	setPages(pages);
</script>

<SlideDeck {pages} title="My Deck" description="A presentation built with GeekPresent." width={1920} height={1080} fill>
	<slot />
</SlideDeck>
