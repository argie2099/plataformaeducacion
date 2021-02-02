import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { getCourses } from "../../../Redux/actionCreators"
import store from "../../../Redux/store"
import BannerWeb from "../../Molecules/BannerWeb"
import CourseCard from "../../Organisms/CourseCard"


const Cursos = ({courses}) => {

  useEffect(() => { 
    store.dispatch(getCourses())
  }, [])
  
  return (
    <>
      <BannerWeb
        Title='Cursos'
        Subtitle='Domina las mejores tecnologías junto con los mejores profesores'
        bg="https://i.blogs.es/fd396a/hook/1366_2000.jpg"
      />
      {
        courses &&
        <div className="ed-grid m-grid-4 lg-grid-5">
          {
            courses.map(c => 
              <CourseCard 
              name={c.name}
              picture={c.picture}
              key={c.id}
              iden={c.slug}
              general_route="curso" />
            )
          }
        </div>
      }
    </>)
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})



export default connect(mapStateToProps, {})(Cursos) 
