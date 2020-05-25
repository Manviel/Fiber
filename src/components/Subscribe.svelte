
<script>
 	import { count } from '../stores.js';

  function increment() {
		count.update(n => n + 1);
	}
  
  function decrement() {
		count.update(n => n - 1);
  }
</script>

<section class="actions">
  <button on:click={increment} class="btn">
    Subscribe
  </button> 

  <button on:click={decrement} class="btn">
	  Unsubscribe
  </button>
</section>

<style>
  .actions {
    display: flex;
    flex-direction: column;
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
