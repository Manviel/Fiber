<script>
	export let item;
</script>

<article class="post">
  <div class="box">{item.upvotes} upvotes</div>

  <section class="content">
    {#if item.user}
      <h2 class="title">{item.user.name.first}</h2>
      <h3 class="title">{item.user.name.last}</h3>
    {/if}

    <span>{item.text}</span>
  </section>
</article>

<style>
	.post {
	  width: 100%;
    min-height: 300px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    background: #E5E6EA;
    margin-bottom: 12px;
  }

  .post:nth-child(even) .content {
    background: linear-gradient(0deg, #c21833, transparent);
  }

  .post:nth-child(odd) .content {
    background: linear-gradient(0deg, #8012a5, transparent);
  }
  
  .post:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  .post:hover .box {
    opacity: 0.5;
  }

  .post:hover .content {
    bottom: 0;
  }

	.content {
		position: absolute;
    width: 100%;
    height: 70%;
    bottom: -100%;
    box-sizing: border-box;
    text-align: center;
    transition: 0.5s;
	}

  .title {
    margin-bottom: 8px;
  }

	.box {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 12px;
	}
</style>
