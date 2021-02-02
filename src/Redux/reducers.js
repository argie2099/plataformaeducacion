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
    // Recibimos el objeto data como un array con un solo objeto
    // A nosotros no nos interesa agregarle un array a nuestro courseData
    // Asi que extraemos de la data recibida el unico objeto (en el índice 0)
    // Y lo asignamos a una variable llamada pureData
    const pureData = data[0];
    // console.log("data recibida: " ,pureData);
    if (pureData === undefined) {
      return state
    }
    if (!pureData && state.courseData.length === 0) {
      return state
    }
    // Luego le asignamos nuestro estado sin modificar a una variable
    // llamada courseDataArray y desde ahora en adelante representara
    // a nuestro estado anterior sin modificar en forma de array
    const courseDataArray = state.courseData
    // A continuación comprobamos si la data recibida ya existe en nuestro store
    // Para ello comparamos el id de la data recibida con el id de todos los elementos
    // Que tenemos en courseDataArray y creamos un nuevo array con todos los elementos
    // que no tengan el mismo id que nuestra data recibida y la guardamos en la variable
    // llamada courseDataFiltered
    const courseDataFiltered = courseDataArray.filter(c => pureData.id !== c.id)
    // Ya seguros de que nuestro array no contiene el mismo elemento que nos trajo la data
    // procedemos a agregar la información recibida como un objeto a nuestro array filtrado
    courseDataFiltered.push(pureData)
    // en este punto ya tenemos un array courseDataFiltered con nuestro nuevo elemento y todos
    // los anteriroes, asegurandose de que ninguno se encuentra repetido.
    // En el siguiente paso ejecutamos el return de nuestro reducer y devolvemos el array limpio
    return {
      ...state,
      courseData: courseDataFiltered
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
