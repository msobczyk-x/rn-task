import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  small: {
    width: 200,
    height: 200,
  },
  large: {
    width: 310,
    height: 310,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
