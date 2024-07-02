import {create} from 'zustand';
import {AlbumSearch} from '../../interfaces/AlbumSearch/AlbumSearch';

interface AlbumStore {
  albumId: string;
  setAlbumId: (albumId: string) => void;

  albumInfoSelected: AlbumSearch | null;
  setAlbumsInfoSelected: (album: AlbumSearch) => void;
}

export const useAlbumStore = create<AlbumStore>(set => ({
  albumId: '',
  setAlbumId: (albumId: string): void => {
    return set(() => ({
      albumId: albumId,
    }));
  },

  albumInfoSelected: null,
  setAlbumsInfoSelected: (album: AlbumSearch): void => {
    return set(() => ({
      albumInfoSelected: album,
    }));
  },
}));
