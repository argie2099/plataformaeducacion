import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleCourse } from '../../../Redux/actionCreators';
import store from '../../../Redux/store';
import BannerWeb from '../../Molecules/BannerWeb';
import { Link } from 'react-router-dom'

const Curso = ({ course }) => {

  useEffect(() => {
    store.dispatch(getSingleCourse(1))
  }, [])

  return (
    <>
    { course &&
    <>
      <BannerWeb
        Subtitle={course.information}
        Title={course.name}
        bg="https://www.wallpapertip.com/wmimgs/82-822562_src-gorgerous-coding-background-data-id-programming.jpg"
        img={course.picture}
        color="dark-color"
        isCourse
      />
      <main className="ed-grid lg-grid-10">
        <div className="lg-cols-7">
          <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
            <div>
              <h3 className="t4">¿Qué aprenderás?</h3>
              <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
            </div>
            <div>
              <h3 className="t4">Cónocimientos previos</h3>
              <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
            </div>
            <div>
              <h3 className="t4">Nivel</h3>
              <p>{course.level}</p>
            </div>
          </div>
          <h2>Temario del curso</h2>
          <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
            {
              course.data.classes.map(cl => (
                <div className="course-class l-section" key={cl.class.id}>
                  <h3>{cl.class.title}</h3>
                  <p>{cl.class.description}</p>
                  <ul className="data-list">
                  {
                    cl.subjects.map(s => (
                      <li key={s.subject.id}>
                        <Link to={`/clase/${s.subject.id}`} className="color dark-color" >{s.subject.title}</Link>
                      </li>
                    ))
                  }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="lg-cols-3" >
          <h2 className="t3"> Profesor </h2>
          <p>Beto Quiroga</p>
        </div>
      </main>
    </> 
    }
    </>
  );
}
 
const mapStateToProops = state => ({
  course: state.courseReducer.courseData
})

export default connect(mapStateToProops, {})(Curso)












// const Curso = ({ match, index, curso }) => {
  
//   const matchParam = match.params.url_name

//   useEffect(() => {
//     setcourseIndex(index.indexOf(matchParam))
//     setcourseID(courseIndex + 1)
//     store.dispatch(getSingleCourse(courseID))
//     setCursoActual(curso[courseIndex])
//   }, [curso])

//   const [cursoActual, setCursoActual] = useState()
//   const [courseIndex, setcourseIndex] = useState()
//   const [courseID, setcourseID] = useState()
  
//   return(
//     <>
//       { 
//         cursoActual !== undefined ?
//         <BannerWeb
//         Subtitle={cursoActual.information}
//         Title={cursoActual.name}
//         bg="https://www.wallpapertip.com/wmimgs/82-822562_src-gorgerous-coding-background-data-id-programming.jpg"
//         img={cursoActual.picture}
//         color="darkColor"
//         isCourse
//         />
//         :
//         <div className="ed-grid">
//           <span className="t3">Cargando...</span>
//         </div>
//       }
//     </>
//   )
// }

// const mapStateToProps = state => ({
//   index: state.courseReducer.indexList,
//   curso: state.courseReducer.courseData
// })

// export default connect(mapStateToProps, {})(Curso)
