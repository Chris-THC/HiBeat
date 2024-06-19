import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  playlistCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 230,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  imageCrad: {
    marginTop: 1,
    height: 190,
    width: 190,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleCrad: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '700',
    marginHorizontal: 3,
  },
  playIconOnImage: {
    zIndex: 1,
    position: 'absolute',
    bottom: 45,
    left: '5%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 55,
    width: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
