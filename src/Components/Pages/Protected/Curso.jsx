import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleCourse } from '../../../Redux/actionCreators';
import store from '../../../Redux/store';
import BannerWeb from '../../Molecules/BannerWeb';
import Page404 from '../Page404';

let counter = 0

const Curso = ({ match, course }) => {

  let isUpdated = false

  if (counter > 3) {
    counter = 0
  }

  counter++

  useEffect(() => {
    store.dispatch(getSingleCourse(match.params.urlname))
  }, [match])

  const a = course.filter(c => c.slug === match.params.urlname)

  const actualCourse = a[0]
  
  if (course.length > 0 || counter > 2) {
    isUpdated = true
  }

  return (
    <>
    {
    isUpdated ?
    <>
      { actualCourse ?
      <>

      <BannerWeb
        Subtitle={actualCourse.information}
        Title={actualCourse.name}
        bg="https://www.wallpapertip.com/wmimgs/82-822562_src-gorgerous-coding-background-data-id-programming.jpg"
        img={actualCourse.picture}
        color="dark-color"
        isCourse
      />
      
      <main className="ed-grid lg-grid-10">
      <div className="lg-cols-7">
        <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
          <div>
            <h3 className="t4">¿Qué aprenderás?</h3>
            <ul dangerouslySetInnerHTML={{__html: actualCourse.you_learn}} />
          </div>
          <div>
            <h3 className="t4">Cónocimientos previos</h3>
            <ul dangerouslySetInnerHTML={{__html: actualCourse.requirements}} />
          </div>
          <div>
            <h3 className="t4">Nivel</h3>
            <p>{actualCourse.level}</p>
          </div>
        </div>
        <h2>Temario del curso</h2>
        <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
          {
            actualCourse.data.classes.map(cl => (
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
      :
      <Page404 />
      }
    </>
    :
    <div className="ed-grid s-center s-pt-4">
      <p className="t3">Cargando...</p>
    </div>
    }
  </>
  );
}
 
const mapStateToProops = state => ({
  course: state.courseReducer.courseData
})

export default connect(mapStateToProops, {})(Curso)
