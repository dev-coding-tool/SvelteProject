<script>
	import { todos } from '$lib/js/_common.js';

	function restart() {
		window.location.reload()
	}
</script>

<div class="border border-danger" style="height: 500px;">
	<h1>Category</h1> 
	<button on:click={restart}>Get Category</button>
    {#each $todos as item}
        <p>{item.title}</p>
    {/each}
</div>
