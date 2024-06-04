<script>
	import { Navbar } from '@sveltestrap/sveltestrap';
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