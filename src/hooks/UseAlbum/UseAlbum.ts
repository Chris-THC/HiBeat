import {UseQueryResult, useQuery} from '@tanstack/react-query';
import YTMusic, { AlbumFull } from 'ytmusic-api';
import { AlbumStreaming } from '../../interfaces/AlbumSearch/AlbumStreaming';
import { streamingAlbumByPlaylistId } from '../UseStreamingAlbum/UseStreamingAlbum';
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

const albumStreamingFunction = async (idPlaylist: string, imgCover:string): Promise<AlbumStreaming[] | null> => {
  try {
    const artistInfo = await streamingAlbumByPlaylistId(idPlaylist,imgCover);
    return artistInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useStreamingAlbum = (playlistId: string, imgCover: string): UseQueryResult<AlbumStreaming[], Error> => {
  return useQuery({
    queryKey: ['streamingAlbum', playlistId, imgCover],
    queryFn: () => albumStreamingFunction(playlistId, imgCover),
  });
};

