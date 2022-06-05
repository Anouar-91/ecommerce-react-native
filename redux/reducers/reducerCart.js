import PaidCourseModel from '../../data/PaidCourseModel'
import {ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT, DELETE_COURSE} from '../constants'
const initialState = {
   cartCourses: [],
   total: 0
}

const reducerCart = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const course = action.course;
            const id =  course.id
            const price =course.price
            const title =course.title
            const newCourse= new PaidCourseModel(id, price, title);
            return {
                ...state,
                cartCourses: state.cartCourses.concat(newCourse),
                total : state.total + price
            }
        case REMOVE_COURSE_CART:
            const indexResult = state.cartCourses.findIndex(course => course.id === action.courseId)
            const newCartCourses = [...state.cartCourses];
            newCartCourses.splice(indexResult, 1);

            const coursePrice = state.cartCourses[indexResult].price
            return {
                ...state, 
                cartCourses: newCartCourses,
                total: state.total - coursePrice
            }
        case ADD_PAYMENT: 
            return initialState

        case DELETE_COURSE:
            if(state.cartCourses.length > 0){
                const index = state.cartCourses.findIndex(course => course.id === action.courseId)
                const courseInfo = state.cartCourses[index]
                console.log(courseInfo)
                const newCartCourses2 = [...state.cartCourses];
                newCartCourses2.splice(index, 1)
        
                return {
                    ...state, 
                    cartCourses: newCartCourses2,
                    total: state.total - courseInfo.price
                } 
            }
            else{
                return {
                    state
                }
            }
 

        default:
            return state;
    }
}

export default reducerCart;