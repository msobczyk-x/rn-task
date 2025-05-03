import {StyleSheet} from 'react-native';
import {theme} from '@/constants/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.darkGreen,
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: theme.colors.primary,
    gap: 4,
  },
  activeTabItem: {
    backgroundColor: theme.colors.darkGreen,
  },
  tabLabel: {
    color: 'white',
  },
});
