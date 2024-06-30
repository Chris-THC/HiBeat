import {create} from 'zustand';
import {SongDetailed} from '../../interfaces/SerachInterface/SearchTracks';
import {ArtistDetailed} from '../../interfaces/SerachInterface/ArtistDetails';

interface SearchStore {
  searchSomething: string;
  setSearchSomething: (search: string) => void;
  
  trackList: SongDetailed[] | null;
  setTrackList: (trackList: SongDetailed[]) => void;

  artistList: ArtistDetailed[] | null;
  setArtistList: (artistList: ArtistDetailed[]) => void;
}

export const useSearchStore = create<SearchStore>(set => ({
  searchSomething: '',
  setSearchSomething: (search: string): void => {
    return set(() => ({
      searchSomething: search,
    }));
  },

  trackList: null,
  setTrackList: (trackList: SongDetailed[]): void => {
    return set(() => ({
      trackList: trackList,
    }));
  },

  artistList: null,
  setArtistList: (artist: ArtistDetailed[]): void => {
    return set(() => ({
      artistList: artist,
    }));
  },
}));
