import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoursesNavigator from './CoursesStackNav';
import {DrawerNavigator} from './DrawerNav'

const AppNav = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}
export default AppNav;