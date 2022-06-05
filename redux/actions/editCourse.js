import {EDIT_COURSE} from '../constants'

export const editCourse = (id, title, image, description) => {
    return {
        type:EDIT_COURSE,
        courseId: id,
        updatedCourse: {
            title, image, description
        }

    }
}