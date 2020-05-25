<script>
	import { onMount } from 'svelte';

	import Post from './Post.svelte';

	let facts = [];

	const BACKEND_URL = 'https://cat-fact.herokuapp.com';

  onMount(async () => {
		const response = await fetch(`${BACKEND_URL}/facts`, {});

		const posts = await response.json();

		facts = posts.all;
	});
</script>


<section class="container">
  {#each facts as thing (thing._id)}
    <Post item={thing} />
  {/each}
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>