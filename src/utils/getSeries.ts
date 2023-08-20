import type { CollectionEntry } from "astro:content";

const getSeries = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const seriesSet = new Set<string>();

  filteredPosts.forEach(post => {
    const series = post.data.series;
    if (series) seriesSet.add(series);
  });

  const series = Array.from(seriesSet);
  return series;
};

export default getSeries;
