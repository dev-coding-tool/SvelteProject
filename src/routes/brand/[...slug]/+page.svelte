<script>
	import { page } from '$app/stores';
	import { Navbar } from '@sveltestrap/sveltestrap';
	const slugArray = $page.params.slug.split('/');
</script>

<Navbar class="" container="fluid" color="dark" dark={true} expand="md" fixed="" sticky="">
	<div class="container-fluid">
		<p class="navbar-brand">Navbar</p>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/brand">BRAND</a>
				</li>
			</ul>
		</div>
	</div>
</Navbar>
<div>
	<ul>
		<li><a href="/">HOME</a></li>
		<li><a href="/brand">BRAND</a></li>
	</ul>
	<h1>Brand</h1>
</div>

<hr />

{#if slugArray.length === 1}
	<h5>{slugArray[0]}</h5>
{:else if slugArray.length >= 2}
	<h5>{slugArray[1]}</h5>
{/if}
