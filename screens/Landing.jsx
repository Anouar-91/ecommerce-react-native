import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CourseItem from '../components/CourseItem';
import {addToCart} from '../redux/actions/addToCart'



const Landing = ({navigation}) => {
  const existingCourses = useSelector(state=> state.courses.existingCourses);
  const coursesToDisplay = existingCourses.filter(course => course.selected === false)
  const dispatch = useDispatch();
  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert("Article ajouté au panier")
  }
  useEffect(() => {

  }, [coursesToDisplay])

  return (
    <View>
      <FlatList 
      data={coursesToDisplay}
      renderItem={({item}) => (
        <CourseItem
          image={item.image}
          title={item.title}
          price={item.price}
          viewDetails={() => navigation.navigate('Details', {courseId: item.id, title: item.title})}
          onAddToCart={() => handleAddToCart(item)}
          />
      )}
      />
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})