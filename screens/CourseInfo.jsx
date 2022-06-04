import { StyleSheet, Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';
import {addToCart} from '../redux/actions/addToCart'

const CourseInfo = ({ route, navigation }) => {
  const courses = useSelector((state) => state.courses.existingCourses)
  const course = courses.find((course) => course.id === route.params.courseId)
  const dispatch = useDispatch();
  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert("Article ajouté au panier")
  }

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Image
          source={{ uri: course.image }}
          style={styles.courseImage}
        />
        <View style={styles.courseDetail}>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.description}>{course.description}</Text>

        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>{course.price.toFixed(2)}€</Text>
          </View> 
        </View>
        <View style={styles.footerBottom}>
          <AntDesign style={{marginLeft:20}}name="back" size={24} color="white" onPress={() => navigation.goBack()}/>
          <TouchableOpacity onPress={() =>handleAddToCart(course) }>
            <View style={styles.btnAddToCart}>
                <Text style={styles.btnText}>Ajouter au panier</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  )
}

export default CourseInfo

const styles = StyleSheet.create({
  scroll: {
    backgrgroundColor: GlobalStyles.white,
    height: '80%',

  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  courseDetail: {
    padding: 20,
    alignItems: "center",

  },
  description: {
    color: GlobalStyles.dimGray,
    marginHorizontal: 20,
    marginVertical: 10
  },
  footerContainer: {
    height: "20%",
  },
  footerTop:{

  },
  coursePriceWrapper:{
      paddingRight: 40,
  },
  coursePrice:{
    fontSize: 24,
    color:GlobalStyles.green
  },
  footerTop:{
    height:"40%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  footerBottom:{
    height:"60%",
    flexDirection: "row",
    backgroundColor: GlobalStyles.green,
    alignItems: "center",
    justifyContent: "space-between",

  },
  btnAddToCart:{
    borderRadius:6,
    paddingVertical:9,
    paddingHorizontal:25,
    backgroundColor:GlobalStyles.lightorange,
    marginRight:20
  },
  btnText:{
    fontSize:19
  }
})