<script>
	import List from './List.svelte';

	let files;
	let preview;

	function handleChange() {
		const reader = new FileReader();
		const file = files[0];

		reader.onloadend = () => preview = reader.result;

    reader.readAsDataURL(file);
	}
</script>

<section class="top">
	<input type="file" bind:files />

	{#if preview}
		<img src={preview} alt="preview" class="picture" />
	{/if}

	{#if files}
		<button on:click={handleChange} class="btn">Show preview</button>
	{/if}

	<List />
</section>

<style>
	.top {
		margin: 12px 20px;
	}

	.picture {
		display: block;
		width: 100%;
		max-height: 100%;
		margin-bottom: 20px;
	}

	.btn {
    border: none;
    color: #fff;
    padding: 12px 42px;
    border-radius: 50px;
    transition: 0.5s;
    background-color: #3897f0;
    outline: none;
  }

  .btn:hover {
    box-shadow: 0 7px 22px rgba(53, 166, 245, 1);
  }
</style>
