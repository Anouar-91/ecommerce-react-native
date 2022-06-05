import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { useSelector, useDispatch } from 'react-redux'
import {editCourse} from '../redux/actions/editCourse'
import {createCourse} from '../redux/actions/createCourse'

const UserEditCourse = ({ route, navigation }) => {

  const courseId = route.params.courseId
  const course = useSelector(state => state.courses.loggedInMemberCourses.find((course) => course.id === courseId))

  const [title, setTitle] = useState(course ? course.title : "")
  const [img, setImg] = useState(course ? course.image : "")
  const [price, setPrice] = useState(course ? course.price : "")
  const [desc, setDesc] = useState(course ? course.description : "")
  const dispatch = useDispatch()


  const handlePress = () => {
    if (courseId) {
      dispatch(editCourse(courseId, title, img, desc ))
      navigation.navigate("Courses")
    } else {
      dispatch(createCourse( title , desc, img, +price  ))
      navigation.navigate("Courses")
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Titre</Text>
          <TextInput style={styles.titleInput} value={title} onChangeText={(val) => setTitle(val)} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image</Text>
          <TextInput style={styles.titleInput} value={img} onChangeText={(val) => setImg(val)} />
        </View>
        {
          course ? null : (
            <View style={styles.formControl}>
              <Text style={styles.label}>Prix</Text>
              <TextInput style={styles.titleInput} value={price} onChangeText={(val) => setPrice(val)} />
            </View>
          )
        }

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.titleInput} value={desc} onChangeText={(val) => setDesc(val)} />
        </View>
        <TouchableOpacity onPress={() => handlePress()} >
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Valider</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default UserEditCourse

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20
  }
  ,
  formControl: {
    width: "100%",

  },
  label: {
    marginVertical: 15,
    color: GlobalStyles.green,
    fontWeight: "bold",
  },
  titleInput: {
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: GlobalStyles.green,
    borderWidth: 0.5,
    borderRadius: 6
  },
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: GlobalStyles.green,
    marginTop: 20
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
  }
})