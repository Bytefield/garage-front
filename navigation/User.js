import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/users/Login';
import Register from '../screens/users/Register';
import Profile from '../screens/users/Profile';

const Stack = createStackNavigator();

function UserStack() {
  return (
	<Stack.Navigator>
		<Stack.Screen
			name="Login"
			component={Login}
			options={{
				headerShown: false
			}}
		/>
		<Stack.Screen
			name="Register"
			component={Register}
			options={{
				headerShown: false
			}}
		/>
		<Stack.Screen
			name="Profile"
			component={Profile}
			options={{
				headerShown: false
			}}
		/>
	</Stack.Navigator>
  );
}

export default function UserStackNavigator() {
  return <UserStack />;
}