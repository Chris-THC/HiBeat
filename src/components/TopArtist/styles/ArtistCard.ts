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
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(0, 0, 0, .3)',
    textShadowOffset: {width: -1, height: 1},
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
