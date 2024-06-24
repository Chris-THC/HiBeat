import TrackPlayer, {useIsPlaying} from 'react-native-track-player';

export const handlerPlay = async () => {
  await TrackPlayer.play();
};

export const handlerPause = async () => {
  await TrackPlayer.pause();
};

export const handlerSkip = async () => {
  let trackIndex = await TrackPlayer.getCurrentTrack();
  await TrackPlayer.skip(trackIndex!);
};

export const handlerNextTrack = async () => {
  await TrackPlayer.skipToNext();
};

export const handlerPreviousTrack = async () => {
  await TrackPlayer.skipToPrevious();
};