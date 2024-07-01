import {UseQueryResult, useQuery} from '@tanstack/react-query';
import YTMusic, { AlbumFull } from 'ytmusic-api';
const ytmusic = new YTMusic();

const albumInfoFunction = async (albumId: string): Promise<AlbumFull | null> => {
  try {
    await ytmusic.initialize();
    const artistInfo = await ytmusic.getAlbum(albumId);
    return artistInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useAlbumById = (albumId: string): UseQueryResult<AlbumFull, Error> => {
  return useQuery({
    queryKey: ['albumInfoById', albumId],
    queryFn: () => albumInfoFunction(albumId),
  });
};
