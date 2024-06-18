<script>
	import { page } from '$app/stores';
	import {
		Container,
		Row,
		Col,
		Carousel,
		CarouselItem,
		CarouselControl
	} from '@sveltestrap/sveltestrap';
	import src1 from '~/lib/images/image_1.jpg';
	import src2 from '~/lib/images/image_2.jpg';
    import src3 from '~/lib/images/image_3.jpg';

	const pageParam = $page.params;
	let alt = 'image';
	let hasSlug = pageParam.hasOwnProperty('slug');

	const items = [src1, src2, src3];
	let activeIndex = 0;
</script>

<div class="container_contents min-vh-100">
	{#if hasSlug}
		<div class="container_custom"></div>
	{:else}
		<Container fluid class="text-center">
			<!-- 
            <Row>
                <Col md={{ size: 8, order: 0, offset: 2 }} style="border: solid;">
                    <p class="text-capitalize fs-1">cat</p>
                </Col>
            </Row>
            <Row>
                <Col md="col-sm-auto col-md-8 offset-md-2" style="border: solid;">
                    <div class="badge text-bg-primary text-wrap">hello</div>
                    <div class="container_custom">

                    </div>
                </Col>
                <Col md={{order: 1}} style="border: solid;">
                    <div class="container_custom">
                        <img class="_default" src={src2} alt={alt}>
                    </div>
                </Col>
            </Row> 
            -->
			<!-- <Row class="h-100">
				<Col class="mx-3 border border-danger"> -->
					<Carousel {items} bind:activeIndex>
						<div class="carousel-inner carousel_container h-100">
							{#each items as item, index}
								<CarouselItem bind:activeIndex itemIndex={index}>
									<img src={item} class="w-50" alt="{item} {index + 1}" />
								</CarouselItem>
							{/each}
						</div>
						<CarouselControl direction="prev" bind:activeIndex {items} />
						<CarouselControl direction="next" bind:activeIndex {items} />
                    </Carousel>
				<!-- </Col>
			</Row> -->
		</Container>
	{/if}
</div>

<style>
</style>
