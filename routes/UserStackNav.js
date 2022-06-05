import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import UserCourses from "../screens/UserCourses";
import UserEditCourse from "../screens/UserEditCourse";
import GlobalStyles from "../styles/GlobalStyles";
import { Item } from "react-navigation-header-buttons";
import { MaterialHeaderButtons } from './MyHeaderButtons';
import { MaterialIcons } from '@expo/vector-icons';

const UserStackNavigator = createStackNavigator();

const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: GlobalStyles.green },
                headerTitleStyle: { fontWeight: "bold" },
                headerTintColor: GlobalStyles.white,

            })}
        >
            <UserStackNavigator.Screen
                name="Courses"
                component={UserCourses}
                options={({ navigation }) => ({
                    title: "Mes cours",
                    headerRight: () => (
                        <MaterialHeaderButtons>
                            <MaterialIcons name="library-add" size={24} color="white" onPress={() => navigation.navigate('Edit', {
                                title: 'Créer un cours'
                            })} />
                        </MaterialHeaderButtons>
                    ),
                    headerLeft: () => (
                        <MaterialHeaderButtons>
                            <Item title="Panier" iconName="menu" onPress={() => navigation.openDrawer()} />
                        </MaterialHeaderButtons>
                    ),
                })}
            />
            <UserStackNavigator.Screen
                name="Edit"
                component={UserEditCourse}
                options={({ navigation, route }) => ({
                    title: route.params.title ? route.params.title : "Editer le cours",

                })}
            />

        </UserStackNavigator.Navigator>
    )
}

export default UserNavigator;