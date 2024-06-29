import {create} from 'zustand';
import {SongDetailed} from '../../interfaces/SerachInterface/SearchTracks';

interface SearchStore {
  searchSomething: string;
  setSearchSomething: (search: string) => void;
  trackList: SongDetailed[] | null;
  setTrackList: (trackList: SongDetailed[]) => void;
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
}));
