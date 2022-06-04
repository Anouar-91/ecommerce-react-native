import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const EmptyMsg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Panier vide</Text>
    </View>
  )
}

export default EmptyMsg

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
    },
    msg:{
        fontSize:20,
        color: GlobalStyles.green,
        fontWeight: "bold",
    }
})