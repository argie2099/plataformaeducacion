import axios from "axios"

import { GET_ALL_COURSES, GET_ALL_POST, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_INDEX_LIST, GET_SINGLE_CLASS, GET_SINGLE_COURSE, GET_SINGLE_POST, GET_SINGLE_SPECIALITY } from "./actions"

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

export const getIndexList = () => dispatch => {
  axios.get(`${API_URL}/listaIndex`)
  .then(res => {
    return dispatch({
      type: GET_INDEX_LIST,
      data: res.data
    })
  })
}

export const getCourses = () => dispatch => {
    axios.get(`${API_URL}/cursos`)
    .then(res => {
      return dispatch({
        type: GET_ALL_COURSES,
        data: res.data
      })
    })
}

export const getSingleCourse = (urlname) => dispatch => {
  axios.get(`${API_URL}/curso?slug=${urlname}`)
  .then(res => {
    return dispatch({
      type: GET_SINGLE_COURSE,
      data: res.data
    })
  })
}

export const getAllSpecialities = () => dispatch => {
  axios.get(`${API_URL}/especialidad`)
  .then(res => {
    return dispatch({
      type: GET_ALL_SPECIALITIES,
      data: res.data
    })
  })
}

export const getSingleSpeciality = id => dispatch => {
  axios.get(`${API_URL}/especialidad/${id}`)
  .then(res => {
    console.log(res.data);
    return dispatch({
      type: GET_SINGLE_SPECIALITY,
      courses: res.data
    })
  })
}


export const getAllTeachers = () => dispatch => {
  axios.get(`${API_URL}/profesores`)
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
