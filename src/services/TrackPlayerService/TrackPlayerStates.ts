import {useState} from 'react';
import {Event, State, useTrackPlayerEvents} from 'react-native-track-player';

const events = [Event.PlaybackState, Event.PlaybackError];

export const isTrackPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackState) {
      setIsPlaying(event.state === State.Playing);
    }
  });

  return isPlaying;
};
