<script lang="ts">
  import {page} from '$app/stores'

  export let data
  //console.log($page.params.id)
</script>

<h1><a href="/">WEB</a></h1>
<ul>
  {#each data.posts as post}
    <li><a href="/read/{post.id}">{post.title}</a></li>
  {/each}
</ul>

<slot />

<ul>
  <li><a href="/create">Create</a></li>
  {#if $page.params.id}
    <li><a href="/update/{$page.params.id}">Update</a></li>
    <li>
      <form action="/delete/{$page.params.id}" method="post">
        <input type="hidden" name="id" value={$page.params.id}>
        <input type="submit" value="delete">
      </form>
    </li>
  {/if}
</ul>