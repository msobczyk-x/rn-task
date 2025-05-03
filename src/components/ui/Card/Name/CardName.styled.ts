import {StyleSheet} from 'react-native';
import {theme} from '@/constants/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 80,
    padding: 8,
    gap: 4,
  },
  labelText: {
    color: theme.colors.mediumGreen,
    textTransform: 'uppercase',
  },
  valueText: {
    color: theme.colors.darkGreen,
  },
});
