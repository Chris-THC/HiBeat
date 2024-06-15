import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  playlistCard: {
    height: 235,
    width: 190,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 5,
  },
  imgPlaylist: {
    height: 175,
    width: 175,
    borderRadius: 8,
  },
  textCard: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
  },
  iconPlayOnImageCover: {
    zIndex: 1,
    position: 'absolute',
    bottom: 5,
    left: '5%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 40,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
