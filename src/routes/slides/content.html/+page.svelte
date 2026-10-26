<script>
	import ContentPage from '@geekpresent/core/templates/ContentPage.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
</script>

<ContentPage title="Content" subtitle="A slide is a Svelte component">
	<ul>
		<li>Write plain HTML, or reach for a component.</li>
		<li>→ / Space to page, ← to go back, O for the overview.</li>
		<li>Add <code>?present</code> to the URL for the presenter console.</li>
	</ul>

	<Note>
		<p>Speaker notes go here. They show in the presenter console and the handout.</p>
	</Note>
</ContentPage>
