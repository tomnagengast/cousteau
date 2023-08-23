<script>
  export let data;
</script>

<h1>Welcome to Cousteau</h1>

{#if data.username}
  <p>Logged in as {data.username}</p>
{:else}
  <a href="/signin">Sign in</a>
  <a href="/signup">Sign up</a>
{/if}
