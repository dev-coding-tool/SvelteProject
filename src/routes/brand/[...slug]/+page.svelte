<script>
	import { page } from '$app/stores';
	import Navigation from '~/common/component/Navigation.svelte';
	import Contents from '~/common/component/Contents.svelte';
	
	const slugArray = $page.params.slug.split('/');
	let brandName = '';
	if(slugArray.length > 0){
		brandName = slugArray[0].toUpperCase();
	}
</script>
<Navigation/>
{#if slugArray.length >= 1}
	<Contents/>
{/if}
<hr/>