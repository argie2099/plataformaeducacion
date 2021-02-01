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

export const getCourses = (url_name) => dispatch => {
  // console.log("URL Name: ", url_name) 
  if (!url_name) {
    axios.get(`${API_URL}/cursos`)
    .then(res => {
      return dispatch({
        type: GET_ALL_COURSES,
        data: res.data
      })
    })
  }
  else {
    axios.get(`${API_URL}/curso`)
    .then(res => {
      const course = res.data.filter(c => {
        // console.log("elementos comparados", c);
        return c.url_name === url_name})
      // console.log(course);
      if (course.length > 0) {
        return dispatch({
          type: GET_SINGLE_COURSE,
          data: course[0]
        })
      }
      // else {
      //   console.log(`La propiedad url_name no existe en ninguno de los elementos del array. \nAsegúrate de haber escrito bien la URL, si eso no funciona revisa la data suministrada por tu base de datos o contacta con tu equipo de backend para solucionar el problema.`)
      // }
    })
  }
}

export const getSingleCourse = (index) => dispatch => {
  axios.get(`${API_URL}/curso/${index}`)
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
  axios.get(`${API_URL}/especialidades/${id}`)
  .then(res => {
    return dispatch({
      type: GET_SINGLE_SPECIALITY,
      courses: res.data
    })
  })
}


export const getAllTeachers = () => dispatch => {
  // console.log('Se ejecuto getAllTeachers');
  // console.log(`${API_URL}/teachers`);
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
