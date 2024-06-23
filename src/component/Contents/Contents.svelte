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
	import Drawing from '../Project/Drawing/Drawing.svelte';

	const items = [src1, src2, src3];
	let activeIndex = 0;
	let alt = "image";

	const pageParam = $page.params;
	let hasSlug = pageParam.hasOwnProperty('slug');
	console.log('hasSlug : '+hasSlug);
	
	let projectArray = [
		{name: 'drawing'},
		{name: 'random'}
	];

	let aboutFlag = false;
	let projectFlag = false;
	let drawingFlag = false;
	let randomFlag = false;

	if(hasSlug){
		let pathName = pageParam.slug;
		console.log('pathName : '+pathName);

		if(pathName.indexOf('about') > -1){
			aboutFlag = true;
		}else if(pathName === 'project'){
			projectFlag = true;
		}else if(pathName.indexOf('drawing') > -1){
			drawingFlag = true;
		}else if(pathName.indexOf('random') > -1){
			randomFlag = true;
		}

		console.log('aboutFlag : '+aboutFlag);
		console.log('projectFlag : '+projectFlag);
		console.log('drawingFlag : '+drawingFlag);
		console.log('randomFlag : '+randomFlag);
	}

</script>

<div class="container_contents min-vh-100">
	{#if hasSlug}
		<Container fluid class="text-center position-fixed">
			
			<Row>
                <Col class="mx-3">
					{#if projectFlag}
						<ul class="container_list my-3 py-3">
							{#each projectArray as {name}, i}
								<li class="py-3"><a class="text-decoration-none text-capitalize fs-4" data-sveltekit-reload href="/project/{name}">{name}</a></li>	
							{/each}
						</ul>
					{:else if drawingFlag}
						<Drawing/>
					{:else if randomFlag}
						<p>random</p>
					{/if}
                </Col>
            </Row>
		</Container>
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
									<img src={item} class="w-50" alt="{alt}{index + 1}" />
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
