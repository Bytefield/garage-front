import React from 'react';
import { createBottomTabNvigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Stacks
import HomeStackNavigator from './Home';
import UserStackNavigator from './User';

const Tab = createBottomTabNvigator();

const Main = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				keyboardHidesTabBar: true,
				showLabel: false,
				activeTintColor: '#fff',
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="User"
				component={UserStackNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}