<script lang="ts">
  import InGame from "../inGame/InGame.svelte";
  import Desktop from "../desktop/Desktop.svelte";
  import Header from "../../components/Header.svelte";
  import { Writable, writable } from "svelte/store";

  const inGame = (() => {
    const { set, update, subscribe }: Writable<boolean> = writable(true);

    return {
      set,
      update,
      subscribe,
      toggleState: () => {
        set(!$inGame);
      },
    };
  })();
</script>

<!-- <button on:click={inGame.toggleState}>Toggle State</button> -->

<Header />

{#if $inGame}
  <InGame />
{:else}
  <Desktop />
{/if}
