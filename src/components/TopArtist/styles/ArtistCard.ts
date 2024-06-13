import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullContainer: {
    marginRight: 100,
    height: 'auto',
  },
  topArtistContent: {
    flexDirection: 'column',
  },
  imageArtistCard: {
    height: 90,
    width: 90,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  artistName: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    textShadowColor: '#111',
    textShadowOffset: {width: -0.2, height: 0.2},
    textShadowRadius: 1,
  },
  artistContentInfo: {
    flexDirection: 'row',
    width: 85,
    justifyContent: 'space-between',
    margin: 3,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  artistContentInfoContText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
