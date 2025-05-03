import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  withIcon: {
    paddingLeft: 12,
  },
  contained: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  outlined: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
  },
  containedPressed: {
    backgroundColor: theme.colors.darkGreen,
    borderColor: theme.colors.darkGreen,
  },
  outlinedPressed: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.greyishGreen,
  },
  textContained: {
    color: theme.colors.white,
  },
  textOutlined: {
    color: theme.colors.primary,
  },
});
