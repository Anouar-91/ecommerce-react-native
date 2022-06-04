import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

const CoursesOverview = ({title, price}) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

export default CoursesOverview

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: GlobalStyles.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10, 
        marginTop: 9,
    },
    title : {
        width:"70%",
    },
    price: {
        color:GlobalStyles.dimGray,
    }
})