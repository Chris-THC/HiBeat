import {StyleSheet} from 'react-native';
import {colorBase} from '../../../enums/AppColors';

export default StyleSheet.create({
  artistMainContainer: {
    backgroundColor: colorBase,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  artistNameContainer: {
    position: 'absolute',
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  artistNameText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
  subTitleText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 10,
    marginVertical: 10,
  },
});