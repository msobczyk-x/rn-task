import {Typography} from '@/components/ui/Typography';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './TabBar.styled';

type TabBarProps = {
	navigation: any;
	state: any;
	descriptors: {[key: string]: any};
};

const TabBar = ({state, descriptors, navigation}: TabBarProps) => {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.container]}>
			{state.routes.map((route: any, index: any) => {
				const {options} = descriptors[route.key];
				const label = options.tabBarLabel || options.title || route.name;
				const isFocused = state.index === index;
				const icon = options.tabBarIcon;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						style={[
							styles.tabItem,
							isFocused && styles.activeTabItem,
							{paddingBottom: insets.bottom},
						]}>
						{icon ? icon() : null}
						<Typography variant="buttonText" style={styles.tabLabel}>
							{label}
						</Typography>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default TabBar;
