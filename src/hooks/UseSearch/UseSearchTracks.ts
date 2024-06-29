import {UseQueryResult, useQuery} from '@tanstack/react-query';
import YTMusic from 'ytmusic-api';
import {SongDetailed} from '../../interfaces/SerachInterface/SearchTracks';
const ytmusic = new YTMusic();

export const serachTracksFuntion = async (track: string): Promise<SongDetailed[]|any> => {
  try {
    await ytmusic.initialize();
    const searchInfo = await ytmusic.searchSongs(track);
    return searchInfo;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const useSearcTracksResult = (track: string): UseQueryResult<SongDetailed[], Error> => {
  return useQuery({
    queryKey: ['useSearchTracksKey', serachTracksFuntion],
    queryFn: () => serachTracksFuntion(track),
  });
};
