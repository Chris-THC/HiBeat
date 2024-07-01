import {create} from 'zustand';
import {AlbumDetailed} from '../../interfaces/SerachInterface/AlbumDetails';

interface AlbumStore {
  albumId: string;
  setAlbumId: (albumId: string) => void;

  albumInfoSelected: AlbumDetailed | null;
  setAlbumsInfoSelected: (album: AlbumDetailed) => void;
}

export const useAlbumStore = create<AlbumStore>(set => ({
  albumId: '',
  setAlbumId: (albumId: string): void => {
    return set(() => ({
      albumId: albumId,
    }));
  },

  albumInfoSelected: null,
  setAlbumsInfoSelected: (album: AlbumDetailed): void => {
    return set(() => ({
      albumInfoSelected: album,
    }));
  },
}));
