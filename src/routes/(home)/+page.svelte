<script lang="ts">
	// '' at the domain root, '/<repo>' on a GitHub project page — so the link works on both.
	import { base } from '$app/paths';
</script>

<h1>My Talks</h1>

<p>
	This is the landing page — <code>src/routes/(home)/+page.svelte</code>. Replace it with your
	own.
</p>

<ul>
	<li><a href="{base}/slides/title.html">The sample deck</a></li>
</ul>

<style>
	h1, p, ul { font-family: sans-serif; }
	a { color: #6cb6ff; }
</style>
