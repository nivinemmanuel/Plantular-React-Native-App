import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import MenuDrawer from '../components/MenuDrawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Recommendation from '../screens/Recommendation';
import RecogResult from '../screens/RecogResult';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH * 0.83,
	contentComponent: ({ navigation }) => {
		return (<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Settings: {
			screen: SettingsScreen
		},
		Recommend: {
			screen: Recommendation
		},
		RecogResult: {
				screen: RecogResult
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);

