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
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        let clientX, clientY;

        if (e.touches) {
            // Touch event
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            // Mouse event
            clientX = e.clientX;
            clientY = e.clientY;
        }

        ctx.lineTo(clientX - canvas.getBoundingClientRect().left, clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(clientX - canvas.getBoundingClientRect().left, clientY - canvas.getBoundingClientRect().top);
    }

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

</script>

<canvas class="bg-white border border-dark" id="drawingCanvas" bind:this={canvas} width="800" height="600"
    on:mousedown={startPosition}
    on:mouseup={endPosition}
    on:mousemove={draw}
	on:touchstart={startPosition}
    on:touchend={endPosition}
    on:touchmove={draw}>
</canvas>