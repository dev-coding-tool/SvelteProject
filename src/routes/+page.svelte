<script>
	import Navigation from '~/common/component/Navigation.svelte';
	import Contents from '~/common/component/Contents.svelte';
	import {obj, testFunction, Commmon} from '~/common/js/_common.js';
	import { browser } from '$app/environment';
	if(browser){
		window.obj = obj;
	}
</script>

<Navigation/>
<Contents />

<style>
	@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
</style>
