import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.lightGreen,
  },
  container: {
    backgroundColor: theme.colors.lightGreen,
    flex: 1,
    flexDirection: 'column',
    gap: 32,
    padding: 16,
  },
  headerButton: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  textContainer: {
    position: 'relative',
  },
  headerButtonText: {
    color: theme.colors.mediumGreen,
  },
  customUnderline: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: theme.colors.mediumGreen,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
