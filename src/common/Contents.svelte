<script>
    let src = './image_1.jpg';
    let alt = 'cat';
</script>
<div class="container">
    <p class="text">cat</p>
    <img {src} alt={alt}>
</div>
<style>
    div.container {
        background-color: rgb(16, 0, 85);
        height: 500px;
    }
    p.text {
        font: oblique;
        color: azure;
    }
    img {
        max-width: 150px;
        max-height: 200px;
    }
</style>