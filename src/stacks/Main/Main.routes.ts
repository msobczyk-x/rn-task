import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {CharacterDetailsStackParamList} from '../CharacterDetails/CharacterDetails.routes';
import type {TabNavigationStackParamList} from '../TabNavigation/TabNavigation.routes';

export type MainStackParamList = {
	TabNavigationStack: NavigatorScreenParams<TabNavigationStackParamList>;
	CharacterDetailsStack: NavigatorScreenParams<CharacterDetailsStackParamList>;
};

export type MainStackNavigationProp =
	NativeStackNavigationProp<MainStackParamList>;

export const MainStackRoutes: {
	[route in keyof MainStackParamList]: route;
} = {
	TabNavigationStack: 'TabNavigationStack',
	CharacterDetailsStack: 'CharacterDetailsStack',
};
