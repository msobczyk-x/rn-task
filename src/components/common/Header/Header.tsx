import {Logo} from '@/components/icons';
import {theme} from '@/constants/theme';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './Header.styled';

const Header = () => {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.wrapper, {paddingTop: insets.top}]}>
			<View style={[styles.headerContainer]}>
				<Logo />
			</View>
			<StatusBar style="light" backgroundColor={theme.colors.darkGreen} />
		</View>
	);
};

export default Header;
