import axios from "axios"

import { GET_ALL_COURSES, GET_ALL_POST, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_SINGLE_CLASS, GET_SINGLE_COURSE, GET_SINGLE_POST, GET_SINGLE_SPECIALITY } from "./actions"

const API_URL = process.env.REACT_APP_API_URL

export const getAllPost = () => dispatch => {
  axios.get(`${API_URL}/posts`)
  .then(res => {
    return dispatch({
      type: GET_ALL_POST,
      posts: res.data
    })
  })
}

export const getSinglePost = id => {
  axios.get(`${API_URL}/posts/${id}`)
  .then(res => {
    return ({
      type: GET_SINGLE_POST,
      posts: res.data
    })
  })
}

export const getAllCourses = () => dispatch => {
  axios.get(`${API_URL}/courses`)
  .then(res => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: res.data
    })
  })
}

export const getSingleCourse = id => {
  axios.get(`${API_URL}/courses/${id}`)
  .then(res => {
    return ({
      type: GET_SINGLE_COURSE,
      courses: res.data
    })
  })
}

export const getAllSpecialities = () => dispatch => {
  axios.get(`${API_URL}/specialities`)
  .then(res => {
    return dispatch({
      type: GET_ALL_SPECIALITIES,
      data: res.data
    })
  })
}

export const getSingleSpeciality = id => dispatch => {
  axios.get(`${API_URL}/specialities/${id}`)
  .then(res => {
    return dispatch({
      type: GET_SINGLE_SPECIALITY,
      courses: res.data
    })
  })
}


export const getAllTeachers = () => dispatch => {
  console.log('Se ejecuto getAllTeachers');
  axios.get(`${API_URL}/teachers`)
  .then(res => {
    return dispatch({
      type: GET_ALL_TEACHERS,
      data: res.data
    })
  })
}

export const getSingleClass = (videoID) => dispatch => {
  axios.get(`${API_URL}/clases/${videoID}`)
  .then(res => {
    return dispatch({
      type: GET_SINGLE_CLASS,
      data: res.data
    })
  })
}
