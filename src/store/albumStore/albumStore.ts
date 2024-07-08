import {create} from 'zustand';
import {AlbumSearch} from '../../interfaces/AlbumSearch/AlbumSearch';
import {AlbumSummary} from '../../interfaces/ArtistInterface/YTMuiscArtistInterface';

interface AlbumStore {
  albumId: string;
  setAlbumId: (albumId: string) => void;

  albumInfoSelected: AlbumSearch | AlbumSummary | null;
  setAlbumsInfoSelected: (album: AlbumSearch | AlbumSummary) => void;
}

export const useAlbumStore = create<AlbumStore>(set => ({
  albumId: '',
  setAlbumId: (albumId: string): void => {
    return set(() => ({
      albumId: albumId,
    }));
  },

  albumInfoSelected: null,
  setAlbumsInfoSelected: (album: AlbumSearch | AlbumSummary): void => {
    return set(() => ({
      albumInfoSelected: album,
    }));
  },
}));
