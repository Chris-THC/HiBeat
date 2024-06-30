export interface AlbumDetailed {
  type: 'ALBUM';
  albumId: string;
  playlistId: string;
  name: string;
  artist: ArtistInfo;
  year: number | null;
  thumbnails: Thumbnail[];
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface ArtistInfo {
  artistId: string | null;
  name: string;
}
