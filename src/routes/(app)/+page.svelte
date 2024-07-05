<script>
	import Contents from '~/component/Contents/Contents.svelte';
	// import {obj, testFunction, Commmon} from '~/lib/js/_common.js';
	// import { browser } from '$app/environment';
	// if(browser){
	// 	window.obj = obj;
	// }
</script>

<Contents/>

<style>
	:global(div.container_contents) {
		background-color: #f2eee2;
		color: #000000;
		transition: background-color 0.3s;
	}
	:global(div.container_contents.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
		transition: background-color 0.3s;
	}
	:global(.bg-twocolor){
		background: linear-gradient(45deg, rgb(255, 80, 80),rgb(80, 80, 255));
	}
	:global(.bg-twocolor.dark-mode){
		background: linear-gradient(45deg ,rgb(80, 80, 255), rgb(255, 80, 80));
	}
</style>
