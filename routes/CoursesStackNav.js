import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Landing from "../screens/Landing";
import CourseInfo from "../screens/CourseInfo";
import Cart from "../screens/Cart";
import GlobalStyles from "../styles/GlobalStyles";
import { Item } from "react-navigation-header-buttons";
import { MaterialHeaderButtons } from './MyHeaderButtons';


const CoursesStackNavigator = createStackNavigator();

const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {backgroundColor: GlobalStyles.green},
                headerTitleStyle: { fontWeight: "bold" },
                headerTintColor: GlobalStyles.white,

                headerRight: () => (
                    <MaterialHeaderButtons>
                        <Item title="Panier" iconName="shopping-cart" onPress={() => navigation.navigate('Cart')}/>
                    </MaterialHeaderButtons>
                ),
                headerLeft: () => (
                    <MaterialHeaderButtons>
                        <Item title="Panier" iconName="menu" onPress={() => navigation.openDrawer()}/>
                    </MaterialHeaderButtons>
                ),
            })}
        >
            <CoursesStackNavigator.Screen
                name="Landing"
                component={Landing}
                options={{title:"Catalogue"}}
            />
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfo}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <CoursesStackNavigator.Screen
                name="Cart"
                component={Cart}
            />
        </CoursesStackNavigator.Navigator>
    )
}

export default CoursesNavigator;