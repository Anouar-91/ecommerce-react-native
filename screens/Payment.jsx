import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react';
import EmptyMsg from '../components/EmptyMsg';
import PaidItems from '../components/PaidItems'



const Payment = () => {
  const payments = useSelector(state => state.payments.payments)
  if(payments.length > 0){
    return (
      <FlatList 
      data={payments}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <PaidItems 
        totalPrice={item.total}
        date={item.date}
        courseDetails={item}

        />
      )}
      />
    )
  }
  return (
    <EmptyMsg text="Pas d'achats à afficher"/>
  )

}

export default Payment

const styles = StyleSheet.create({})