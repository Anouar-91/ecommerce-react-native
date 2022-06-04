import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { MaterialIcons } from '@expo/vector-icons';

const CoursesInCart = (props) => {
  
  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
      <Text  style={styles.price}>{props.price.toFixed(2)}</Text>
      <TouchableOpacity
      onPress={props.onDelete}
      >

<MaterialIcons name="delete" size={24} color={GlobalStyles.green} />
      </TouchableOpacity>
    </View>
  )
}

export default CoursesInCart

const styles = StyleSheet.create({
    coursesContainer:{
        backgroundColor: GlobalStyles.white,
        borderRadius: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10, 
        marginBottom:9
    },
    title:{
        width: "60%",

    }, price:{
        textAlign: "right",
        paddingRight: 9, 
        width : "30%"
    }
})