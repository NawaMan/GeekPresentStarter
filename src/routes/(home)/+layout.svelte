<!-- The landing page at / is a Text: one page that scrolls. The (home) group keeps this
     shell off the decks, which bring their own. -->
<script lang="ts">
	import TextPage from '@geekpresent/core/components/TextPage.svelte';
</script>

<TextPage title="My Talks" description="Presentations built with GeekPresent.">
	<slot />
</TextPage>
