import { writable, Writable } from "svelte/store";
import type { GeneralData } from "../typings/general_data";

async function init() {
  const res = await fetch(
    "https://planner-assets.com/d3planner/data.json?c2878a2f"
  );
  return await res.json();
}

const data: GeneralData = await init();

export const generalData = (() => {
  const { subscribe, update, set }: Writable<GeneralData> = writable(data);

  return {
    subscribe,
    update,
    set,
  };
})();
