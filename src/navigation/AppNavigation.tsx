import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './Screens';
import { Home, List, MapView } from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#1D84C7" },
        }}
    >
        <Stack.Screen name={Screens.Home} component={Home} options={{
            title: "Trang chủ"
        }} />
        <Stack.Screen name={Screens.MapView} component={MapView} options={{
            title: "Bản đồ"
        }} />
        <Stack.Screen name={Screens.List} component={List} />
    </Stack.Navigator>
);

