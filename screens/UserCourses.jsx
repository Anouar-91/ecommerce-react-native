import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import EmptyMsg from '../components/EmptyMsg';
import GlobalStyles from '../styles/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';
import { deleteCourse } from '../redux/actions/deleteCourse';
const UserCourses = ({navigation}) => {

  const loggedInMemberCourses = useSelector(state => state.courses.loggedInMemberCourses)
  const dispatch = useDispatch()
  const handleDelete = (courseId) => {
    Alert.alert('ATTENTION', "Voulez-vous supprimer ce cours", [
      {text:"NON"},
      {text:"OUI", onPress:() =>  dispatch(deleteCourse(courseId))},
    ])
   
  }
  if (loggedInMemberCourses.length > 0) {
    return (
      <FlatList
        data={loggedInMemberCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <View style={styles.courseInfo}>
              <Text numberOfLines={1} style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.coursePrice}>{item.price.toFixed(2)}€</Text>
            </View>
            <View style={styles.btnIcon}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Edit', {
                  courseId: item.id
                })}
                style={styles.touchableIcon}
              >
                <AntDesign name="edit" size={24} color={GlobalStyles.green} />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={styles.touchableIcon}

              >
                <AntDesign name="delete" size={24} color={GlobalStyles.green} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    )
  }
  else {
    return (
      <EmptyMsg text="Pas de cours" />
    )
  }

}

export default UserCourses

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 9
  },
  courseTitle: {
    width: "80%",
  },
  coursePrice: {
    color: GlobalStyles.green

  },
  btnIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableIcon:{
    padding : 9, 

  }
})