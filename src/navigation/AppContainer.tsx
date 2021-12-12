import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppNavigation from './AppNavigation';
import { navigationRef } from './RootNavigation';

export default () => (
    <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="default" />
        <AppNavigation />
    </NavigationContainer>
)