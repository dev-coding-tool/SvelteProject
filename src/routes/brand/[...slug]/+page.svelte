<script>
	import { page } from '$app/stores';
	const slugArray = $page.params.slug.split('/');
	import Navigation from '../../../common/Navigation.svelte';
	import Contents from '../../../common/Contents.svelte';
</script>
<Navigation/>
<Contents/>
<hr/>

{#if slugArray.length === 1}
	<h5>{slugArray[0]}</h5>
{:else if slugArray.length >= 2}
	<h5>{slugArray[1]}</h5>
{/if}
