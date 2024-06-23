<script>
    import { onMount } from 'svelte';

    let canvas;
	let ctx;
	let painting = false;

	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function endPosition() {
		painting = false;
		ctx.beginPath();
	}

	function draw(e) {
		if (!painting) return;

		ctx.lineWidth = 1;
		ctx.lineCap = '';
		ctx.strokeStyle = 'black';

		ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

</script>

<canvas class="bg-white border border-dark" id="drawingCanvas" bind:this={canvas} width="800" height="600"
    on:mousedown={startPosition}
    on:mouseup={endPosition}
    on:mousemove={draw}>
</canvas>