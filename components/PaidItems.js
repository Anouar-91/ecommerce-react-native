import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';
import CoursesOverview from '../components/CoursesOverview'

const PaidItems = ({totalPrice, date, courseDetails}) => {

    const [isShow, setIsShow] = useState(false)

    const icon = isShow ? "minuscircleo" : "pluscircleo";
const handleShow = () => {
    setIsShow(!isShow)
}
  return (
    <ScrollView style={styles.paidCoursesContainer}>
        <View style={styles.paidCourses}>
            <Text style={styles.total}>{totalPrice.toFixed(2)}</Text>
            <Text style={styles.date}>{date}</Text>
        </View> 
        <TouchableOpacity style={styles.iconBtn}
        onPress={() => handleShow()}
        >
        <AntDesign name={icon} size={24} color={GlobalStyles.green} />
        </TouchableOpacity>
        {isShow && (
            <View style={styles.detailsCourse}>
                {courseDetails.courses.map(course => (
                    <CoursesOverview 
                    key={course.id}
                    title = {course.title}
                    price = {course.price}
                    />
                ))}
            </View>
        )}
    </ScrollView>
  )
}

export default PaidItems

const styles = StyleSheet.create({
    paidCoursesContainer: {
        backgroundColor:"white",
        borderRadius:10, 
        margin: 20,
        padding: 15
    },
    paidCourses:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        marginBottom:15
    },
    total: {
        fontSize:18,
    },
    date:{
        fontSize:16,

    },
    iconBtn: {
        alignItems: 'flex-end',
    },
    detailsCourse:{
        marginTop:20,
        borderTopColor: GlobalStyles.lightgrey,
        borderTopWidth: 2
    }
})