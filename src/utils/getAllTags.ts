import { getCollection } from "astro:content";

export async function getAllActivities() {
  const posts = await getCollection("actividades");
  return Array.from(
    new Set(
      posts
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
}
