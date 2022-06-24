import type { SearchResults } from "../typings/search";
import type { BuildData } from "../typings/build_data";

export async function getGuides(): Promise<SearchResults> {
  const response = await fetch(
    "https://site-search-origin.maxroll.gg/indexes/wp_posts/search",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "x-meili-api-key": `${import.meta.env.VITE_X_MEILI_API_KEY}`,
      },
      body: JSON.stringify({
        filters: '(category = "Guides") AND (lang = "en")',
        offset: 0,
        limit: 1000,
        q: "",
      }),
    }
  );
  return response.json();
}

export async function getGuideHTML(id: number | string) {
  const response = await fetch(
    `https://d3.maxroll.gg/wp-json/wp/v2/posts/${id}`,
    {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}

export async function getGuidePlanner(id: number | string): Promise<BuildData> {
  const response = await fetch(
    `https://d3planner.maxroll.gg/d3planner-data/load/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}

export async function getGuidePlannerFromGuideID(
  guideID: number | string
): Promise<BuildData> {
  const guide = await getGuideHTML(guideID);
  const guideRaw = JSON.stringify(guide);
  const guidePlannerID = guideRaw.substring(
    guideRaw.indexOf("data-d3planner-id%3D%22") +
      "data-d3planner-id%3D%22".length,
    guideRaw.indexOf(
      "%22%20",
      guideRaw.indexOf("data-d3planner-id%3D%22") +
        "data-d3planner-id%3D%22".length
    )
  );
  return await getGuidePlanner(guidePlannerID);
}

export function getItemIconURL(itemID: string): string {
  return `https://d3planner-assets.maxroll.gg/icons/${itemID}.png`;
}

export function getSkillIconSetURL(className: string): string {
  return `https://d3planner-assets.maxroll.gg/d3planner/static/media/class-${className}.png`;
}
