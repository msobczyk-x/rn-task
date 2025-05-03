import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    ...theme.shadows.cardShadow,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});
