const { createSlice, configureStore } = require("@reduxjs/toolkit");
import COURSES from '../data/testData';


const courses = createSlice({
    name:'Courses',
    initialState:[
        ...COURSES
      ],
    reducers : {
        get: (state, action) => {

        },

    }

})

export const store = configureStore({
    reducer: {
        courses: courses.reducer
    }
}) 


/* export const {addTask , deleteTask , toggleTask} = todoSlice.actions */