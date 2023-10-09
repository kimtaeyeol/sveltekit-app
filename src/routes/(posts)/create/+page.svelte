<script>
	import { enhance } from "$app/forms";
  export let form
</script>

<h2>Create</h2>
{#if form?.error}
  {@html form?.error}
{/if}
<form method="post" use:enhance>
  <p><input type="text" name="title" placeholder="title"></p>
  <p><textarea name="body" placeholder="body"></textarea></p>
  <p><input type="submit" value="create"></p>
</form>