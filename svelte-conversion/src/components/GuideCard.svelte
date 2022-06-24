<script lang="ts">
  import type { Hit } from "../typings/search";

  export let hit: Hit;
</script>

<div class="content-container">
  <img
    width={hit.images.full.width}
    height={hit.images.full.height}
    src={hit.images.full.source_url}
    alt="firemage background"
  />
  <div class="content">
    <h3>{hit.post_title}</h3>
    <p>By <span>{hit.post_author.display_name}</span></p>
    <span>Last updated on {hit.post_modified_formatted}</span>
  </div>
</div>

<style>
  img {
    width: 100%;
  }

  .content-container {
    margin: 0.25rem;
    position: relative;
    border: solid 2px gray;
  }

  .content-container:hover {
    border: solid 2px blue;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 1rem 1.5rem;
    font-size: 1.25rem;
  }

  .content > h3 {
    color: white;
    font-size: 1.5rem;
  }

  .content > p,
  .content > span {
    color: gray;
  }

  .content > p > span {
    color: blue;
  }
</style>
