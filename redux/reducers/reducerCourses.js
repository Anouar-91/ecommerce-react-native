import COURSES from '../../data/testData';
import {ADD_TO_CART, REMOVE_COURSE_CART, DELETE_COURSE, EDIT_COURSE, CREATE_COURSE} from '../constants';
import CourseModel from '../../data/CourseModel';


const initialState = {
    existingCourses: COURSES,
    loggedInMemberCourses: COURSES.filter((course) => course.instructorId === "1" )
}

const reducerCourses = (state = initialState, action) => {
    switch(action.type){

        case ADD_TO_CART:
            const indexCourseToModify = state.existingCourses.findIndex((course) => course.id === action.course.id)
            const copyExistingCourses = [...state.existingCourses];
            copyExistingCourses[indexCourseToModify].selected = true;
            return {
                ...state,
                existingCourses: copyExistingCourses,
                loggedInMemberCourses: state.loggedInMemberCourses
            }
        case REMOVE_COURSE_CART:
            const indexCourse = state.existingCourses.findIndex((course) => course.id === action.courseId)
            const cloneExistingCourses = [...state.existingCourses];
            cloneExistingCourses[indexCourse].selected = false;
            return {
                ...state,
                existingCourses: cloneExistingCourses,
                loggedInMemberCourses: state.loggedInMemberCourses
            }
        case DELETE_COURSE:

            return {
                ...state,
                existingCourses: state.existingCourses.filter((item) =>item.id !== action.courseId ),
                loggedInMemberCourses: state.loggedInMemberCourses.filter((item) =>item.id !== action.courseId ),
            }

        case EDIT_COURSE: 
            const idCourse = action.courseId;
            const indexCourseToUpdate = state.loggedInMemberCourses.findIndex( course => course.id === idCourse)

            const updateCourse = new CourseModel(
                idCourse,
                action.updatedCourse.title, 
                action.updatedCourse.description, 
                action.updatedCourse.image,
                state.loggedInMemberCourses[indexCourseToUpdate].price, 
                state.loggedInMemberCourses[indexCourseToUpdate].selected, 
                state.loggedInMemberCourses[indexCourseToUpdate].instructorId
            )

            const newLoggedInMemberCourses = [...state.loggedInMemberCourses]

            newLoggedInMemberCourses[indexCourseToUpdate] = updateCourse

            const existingCoursesIndex = state.existingCourses.findIndex(course => course.id === idCourse )
            const newExistingCourses = [...state.existingCourses]
            newExistingCourses[existingCoursesIndex] = updateCourse

            return {
                ...state, 
                existingCourses : newExistingCourses,
                loggedInMemberCourses: newLoggedInMemberCourses
            }

        case CREATE_COURSE: 
            const newCourse = new  CourseModel(
                Date.now().toString,
                action.newCourse.title,
                action.newCourse.description,
                action.newCourse.image,
                action.newCourse.price,
                false,
                "1"
            )

            return {
                ...state, 
                existingCourses: [...state.existingCourses, newCourse],
                loggedInMemberCourses: [...state.loggedInMemberCourses, newCourse],
            }


 
        default:
            return state;
    }
}

export default reducerCourses;