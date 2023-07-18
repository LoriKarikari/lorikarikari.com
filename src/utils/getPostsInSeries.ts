import type { CollectionEntry } from "astro:content";

const getPostsInSeries = (posts: CollectionEntry<"blog">[], series: string) =>
  posts.filter(post => post.data.series === series);

export default getPostsInSeries;
