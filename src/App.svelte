<script>
	import Container from './components/Container.svelte';
	import Profile from './components/Profile.svelte';
	import Upload from './components/Upload.svelte';
</script>

<main>
	<Profile />
	<Container />
	<Upload />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 16px;
		grid-row-gap: 20px;
		padding: 16px 20px;
	}

	@media screen and (max-width: 768px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>