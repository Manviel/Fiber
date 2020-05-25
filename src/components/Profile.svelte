<script>
  import { onDestroy } from 'svelte';

  import Subscribe from "./Subscribe.svelte";

  import { count } from '../stores.js';

  let result;

  const unsubscribe = count.subscribe(value => {
		result = value;
	});

  onDestroy(unsubscribe);
</script>

<section class="profile">
  <div class="fixed">
    <h1 class="description">Svelte</h1>
    <h4 class="description">Independent Designer</h4>
    <p class="description grey">Version {result}</p>

    <Subscribe />
  </div>
</section>

<style>
  .profile {
    position: relative;
  }

  .fixed {
    position: fixed;
  }

  .description {
    margin: 12px 20px;
  }

  .grey {
    color: #acabb0;
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    .fixed {
      position: static;
    }
  }
</style>
