export const getThumbnailUrl = (thumbnails: any) => {
  if (!thumbnails) return null;
  for (let i = 4; i >= 1; i--) {
    if (thumbnails[i]?.url) {
      return thumbnails[i].url;
    }
  }
  return null;
};
