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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 280,
    width: '100%',
    paddingBottom: 20,
  },
  artistNameText: {
    fontSize: 43,
    fontWeight: '600',
    color: '#fff',
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
});
