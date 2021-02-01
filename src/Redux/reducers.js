import { GET_ALL_COURSES, 
         GET_ALL_POST, 
         GET_ALL_SPECIALITIES, 
         GET_ALL_TEACHERS,
         GET_SINGLE_CLASS, 
         GET_SINGLE_COURSE, 
         GET_SINGLE_POST, 
         GET_SINGLE_SPECIALITY } from "./actions"
import { classStore, courseStore, postStore, specialityStore, teacherStore } from "./initialStores"

export const postReducer = (state = postStore, {type, posts}) => {
  if (type === GET_ALL_POST) {
    return {
      ...state,
      posts: posts
    }
  }

  if (type === GET_SINGLE_POST) {
    return(state.posts[posts.id])
  }
  
  return state
}

export const courseReducer = (state = courseStore, {type, data}) => {
  if (type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: data
    }
  }

  if (type === GET_SINGLE_COURSE) {
    return {
      ...state,
      courseData: data
    }
  }

  return state
}

export const specialityReducer = (state = specialityStore, {type, data}) => {
  if (type === GET_ALL_SPECIALITIES) {
    return {
      ...state,
      specialities: data
    }
  }

  if (type === GET_SINGLE_SPECIALITY) {
    return state.specialities[data]
  }
  
  return state
}

export const teacherReducer = (state = teacherStore, {type, data}) => {
  if (type === GET_ALL_TEACHERS) {
    return {
      ...state,
      teachers: data
    }
  }
  
  return state
}

export const classesReducer = (state = classStore, action) => {
  if (action.type === GET_SINGLE_CLASS) {
    return {
      ...state,
      classes: action.data
    }
  }

  return state
}
