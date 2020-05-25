<script>
  import { onDestroy } from 'svelte';

  let counter = 1;

  let items = [];

  function add(input) {
		const todo = {
			id: counter++,
			description: input.value
		};

    items = [todo, ...items];
    
		input.value = '';
	}
</script>

<section class="board">
  <div class="fixed">
    <input
      class="input"
      placeholder="Enter details"
      on:keydown={e => e.key === 'Enter' && add(e.target)}
    >

    <ul class="list">
      {#each items as item (item.id)}
        <li>{item.description}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
  ul li {
    list-style-type: none;
  }

  .board {
    position: relative;
  }

  .fixed {
    position: fixed;
  }

  .input {
    padding: 12px 22px;
    font-size: 17px;
    background-color: #eaebed;
    border: none;
  }

  .list {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    .fixed {
      position: static;
    }
  }
</style>

