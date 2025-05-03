import {StyleSheet} from 'react-native';
import {theme} from '@/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 36,
    borderColor: theme.colors.darkGreen,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 12,
    gap: 10,
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
    color: theme.colors.darkGreen,
    ...theme.fonts.bodyText,
  },
});
