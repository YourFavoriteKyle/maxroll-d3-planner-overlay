<script lang="ts">
  import type { Hit } from "../typings/search";

  export let hit: Hit;
  // const hit: Hit = {
  //   excerpt:
  //     "<p>Introduction Firebird's Finery has been one of the weakest and most clunky sets in the game for quite some time, having to juggle between three Fire abilities to benefit from [&hellip;]</p>\n",
  //   images: {
  //     medium: {
  //       file: "Guides_wiz07_update-760x197.jpg",
  //       width: 760,
  //       height: 197,
  //       gs_name: "wordpress/Guides_wiz07_update-760x197.jpg",
  //       gs_link:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-760x197.jpg",
  //       mime_type: "image/jpeg",
  //       source_url:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-760x197.jpg",
  //     },
  //     thumbnail: {
  //       file: "Guides_wiz07_update-150x150.jpg",
  //       width: 150,
  //       height: 150,
  //       gs_name: "wordpress/Guides_wiz07_update-150x150.jpg",
  //       gs_link:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-150x150.jpg",
  //       mime_type: "ImageJPEG",
  //       source_url:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-150x150.jpg",
  //     },
  //     medium_large: {
  //       file: "Guides_wiz07_update-768x199.jpg",
  //       width: 768,
  //       height: 199,
  //       gs_name: "wordpress/Guides_wiz07_update-768x199.jpg",
  //       gs_link:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-768x199.jpg",
  //       mime_type: "image/jpeg",
  //       source_url:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-768x199.jpg",
  //     },
  //     "hot-topics": {
  //       file: "Guides_wiz07_update-376x98.jpg",
  //       width: 376,
  //       height: 98,
  //       gs_name: "wordpress/Guides_wiz07_update-376x98.jpg",
  //       gs_link:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-376x98.jpg",
  //       mime_type: "image/jpeg",
  //       source_url:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update-376x98.jpg",
  //     },
  //     full: {
  //       file: "Guides_wiz07_update.jpg",
  //       width: 814,
  //       height: 211,
  //       mime_type: "image/jpeg",
  //       source_url:
  //         "https://assets.maxroll.gg/wordpress/Guides_wiz07_update.jpg",
  //     },
  //   },
  //   lang: "en",
  //   permalink:
  //     "https://d3.maxroll.gg/guides/firebird-explosive-blast-wizard-guide",
  //   post_author: {
  //     user_id: 14,
  //     display_name: "Chewingnom",
  //   },
  //   post_date_formatted: "December 7, 2021",
  //   post_modified_formatted: "April 10, 2022",
  //   post_title: "Firebird Explosive Blast Wizard Guide",
  //   tags: [
  //     {
  //       id: 76,
  //       name: "Non-seasonal",
  //       slug: "compatible-with-non-season",
  //       taxonomy: "post_tag",
  //       lang: "en",
  //       link: "https://d3.maxroll.gg/tag/compatible-with-non-season",
  //     },
  //     {
  //       id: 471,
  //       name: "Season 26",
  //       slug: "compatible-with-season-26",
  //       taxonomy: "post_tag",
  //       lang: "en",
  //       link: "https://d3.maxroll.gg/tag/compatible-with-season-26",
  //     },
  //     {
  //       id: 74,
  //       name: "Seasonal/Non-Seasonal Split",
  //       slug: "seasonal-non-seasonal-split",
  //       taxonomy: "post_tag",
  //       lang: "en",
  //       link: "https://d3.maxroll.gg/tag/seasonal-non-seasonal-split",
  //     },
  //   ],
  //   taxonomies: {
  //     category: ["Guides"],
  //     post_tag: ["Non-seasonal", "Season 26", "Seasonal/Non-Seasonal Split"],
  //     classes: ["d3/Firebird's-Finery", "d3/wizard"],
  //     metas: ["d3/bounties", "d3/keys", "d3/push", "d3/speed"],
  //     num: ["d3/solo"],
  //     tiers: ["A"],
  //   },
  //   id: 35697,
  // };
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
