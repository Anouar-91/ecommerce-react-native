import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Payment from "../screens/Payment";
import GlobalStyles from "../styles/GlobalStyles";
import { Item } from "react-navigation-header-buttons";
import { MaterialHeaderButtons } from './MyHeaderButtons';


const PaymentStackNavigator = createStackNavigator();

const PaymentNavigator = () => {
    return (
        <PaymentStackNavigator.Navigator
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
            <PaymentStackNavigator.Screen
                name="Payment"
                component={Payment}
                options={{title: "Mes achats"}}
            />

        </PaymentStackNavigator.Navigator>
    )
}

export default PaymentNavigator;