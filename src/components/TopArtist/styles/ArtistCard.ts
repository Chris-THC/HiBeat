import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topArtistContent: {
    flexDirection: 'column',
  },
  imageArtistCard: {
    height: 100,
    width: 100,
    //   borderRadius: 100,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  artistName: {
    color: '#111',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  artistContentInfo: {
    flexDirection: 'row',
    width: 110,
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
