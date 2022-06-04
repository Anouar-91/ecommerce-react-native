import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Cart from "../screens/Cart";
import GlobalStyles from "../styles/GlobalStyles";
import { Item } from "react-navigation-header-buttons";
import { MaterialHeaderButtons } from './MyHeaderButtons';


const CartStackNavigator = createStackNavigator();

const CartNavigator = () => {
    return (
        <CartStackNavigator.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {backgroundColor: GlobalStyles.green},
                headerTitleStyle: { fontWeight: "bold" },
                headerTintColor: GlobalStyles.white,
                headerLeft: () => (
                    <MaterialHeaderButtons>
                        <Item title="Panier" iconName="menu" onPress={() => navigation.openDrawer()}/>
                    </MaterialHeaderButtons>
                ),
            })}
        >
            <CartStackNavigator.Screen
                name="Cart"
                component={Cart}
                options={{title: "Mon panier"}}
            />

        </CartStackNavigator.Navigator>
    )
}

export default CartNavigator;