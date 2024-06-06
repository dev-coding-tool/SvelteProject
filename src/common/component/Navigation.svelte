<script>
	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from '@sveltestrap/sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar class="" container="fluid" color="dark" dark expand="md" fixed="" light={false} sticky="" theme="dark">
	<NavbarBrand href="/">Home</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/brand">Brand</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://github.com/dev-coding-tool/SvelteProject" target="_blank">GitHub</NavLink>
			</NavItem>
			<!--
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Options</DropdownToggle>
				<DropdownMenu end>
					<DropdownItem>Option 1</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			-->
		</Nav>
	</Collapse>
</Navbar>
