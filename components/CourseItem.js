import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const CourseItem = (props) => {
    return (
        <TouchableHighlight
        underlayColor={GlobalStyles.green}
        onPress={props.viewDetails}
        >
        <View>
        <View style={styles.courseContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: props.image }}
                />
            </View>
            <View style={styles.courseContainerDetail}>
                <Text style={styles.courseTitle}>{props.title}</Text>
                <Text style={styles.coursePrice}>{props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity
                onPress={props.viewDetails}
                >
                    <AntDesign name="eye" size={35} color={GlobalStyles.green} />

                </TouchableOpacity>
                <TouchableOpacity
                onPress={props.onAddToCart}

                >

                    <Entypo name="shopping-cart" size={35} color={GlobalStyles.green} />
                </TouchableOpacity>


            </View>


        </View>
        </View>
</TouchableHighlight>   

    )
}

export default CourseItem

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: GlobalStyles.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: GlobalStyles.lightgrey,
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        height: "60%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    courseContainerDetail: {
        alignItems: 'center',
        height: '20%',
        padding: 20
    },
    courseTitle: {
        fontSize: 18,
        color: GlobalStyles.green,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    coursePrice: {
        color: GlobalStyles.darkgrey,
        fontSize: 16,
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 20
    }
})