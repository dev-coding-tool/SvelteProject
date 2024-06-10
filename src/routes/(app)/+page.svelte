<script>
	import Contents from '~/component/Contents/Contents.svelte';
	import {obj, testFunction, Commmon} from '~/lib/js/_common.js';
	import { browser } from '$app/environment';
	if(browser){
		window.obj = obj;
	}
</script>

<Contents/>

<style>
	:global(div.container_contents) {
		background-color: #f2eee2;
		color: #0084f6;
		position: sticky;
		height: 1000px;
		transition: background-color 0.3s
	}
	:global(div.container_contents.dark-mode) {
		background-color: #1d3040;
		position: sticky;
		height: 1000px;
		color: #bfc2c7;
	}
</style>
