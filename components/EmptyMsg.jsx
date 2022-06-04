import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const EmptyMsg = (props) => {
  const msg = props.text ? props.text : "Panier vide"
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{msg}</Text>
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