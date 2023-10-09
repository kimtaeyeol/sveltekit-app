<script>
	import { enhance } from "$app/forms";
  export let data
  export let form
</script>

<h2>Update</h2>
{#if form?.error}
  {@html form?.error}
{/if}
<form method="post" use:enhance>
  <p><input type="hidden" name="id" value="{data.post?.id}"></p>
  <p><input type="text" name="title" placeholder="title" value={data.post?.title}></p>
  <p><textarea name="body" placeholder="body">{data.post?.body}</textarea></p>
  <p><input type="submit" value="update"></p>
</form>