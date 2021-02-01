import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers } from '../../../Redux/actionCreators';
import store from '../../../Redux/store';
import BannerWeb from "../../Molecules/BannerWeb"
import Teachers from '../../Organisms/Teachers';


const Profesores = ({teachers}) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [])

  return (
    <>
    <BannerWeb
      Title="Nuestros profesores"
      Subtitle="Estos son los profesionales que te estaran guiando en tu desarrollo profesional."
      bg="https://www.vozalia.com/wp-content/uploads/2019/10/cursos-de-voz-para-profesores-y-docentes.jpg"
      />
      
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-5 row-gap">
          {
            teachers.map(t => (
              <Teachers 
              key={t.id}
              country={t.country}
              name={t.name}
              picture={t.picture} />
            ))
          }
        </main>
      }
      </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})


export default connect(mapStateToProps, {})(Profesores)
