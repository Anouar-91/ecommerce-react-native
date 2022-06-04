import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import EmptyMsg from '../components/EmptyMsg'
import CoursesInCart from '../components/CoursesInCart';
import GlobalStyles from '../styles/GlobalStyles';
import {removeCourseCart} from '../redux/actions/removeCourseCart'


const Cart = () => {

  const carts = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const handleDeleteToCart = (courseId) => {
    dispatch(removeCourseCart(courseId));
    alert(courseId)
  }
  return (
    <View style={styles.cartContainer}> 
    {carts.cartCourses.length > 0 ?(
      <View>
        <FlatList 
          data={carts.cartCourses}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <CoursesInCart           
              image={item.image}
              title={item.title}
              price={item.price} 
              onDelete={() => dispatch(removeCourseCart(item.id))}
              />
    )}
        />
        <View style={styles.totalContainer}>
          
          <Text style={styles.totalText}>
            Total: 
          <Text style={styles.totalPrice}>{carts.total.toFixed(2)}€</Text>
          </Text>
          <TouchableOpacity onPress={() => alert("payer")}>
            <View style={styles.btnAddPayement}>
              <Text style={styles.btnAddPayementText}>Payer</Text>
            </View>
          </TouchableOpacity>

          </View>

      </View>
    ) :(
      <EmptyMsg text="Panier vide"/>
    ) }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer:{
    margin: 20
  },
  totalContainer:{
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
    marginTop: 19
  }
,
totalText: {
  fontWeight: "bold",
  fontSize:19
},
totalPrice:{
  color: GlobalStyles.green
},
btnAddPayement:{
  borderRadius: 6,
  paddingVertical:9,
  paddingHorizontal: 25,
  backgroundColor: GlobalStyles.green,
  alignItems: "center"
}, 
btnAddPayementText:{
  fontSize:19, 

}
})