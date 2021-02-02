import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getAllSpecialities } from '../../../Redux/actionCreators'
import store from '../../../Redux/store'
import BannerWeb from '../../Molecules/BannerWeb'

const Especialidad = ({speciality}) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])
  

  return (
    <>
     {
       speciality &&
       <>
       <BannerWeb
          color="dark-color"
          Title={speciality.data.name}
          Subtitle={speciality.data.subtitle}
          image="https://edteam-media.s3.amazonaws.com/specialities/medium/3e6a0de6-602b-439c-a90b-346f13c6760f.png"
          isCourse
          img={speciality.data.picture}
        />
        <main className="ed-grid lg-grid-10">
          <div className="lg-cols-7">
            <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul>
                    { speciality.data.abilities.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Cónocimientos previos</h3>
                  <ul>
                    { speciality.data.knowledge.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
            <h2>Temario de la especialidad</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                speciality.data.courses.map(cl => (
                  <div className="course-class l-section" key={cl.id}>
                    <div className="ed-grid m-grid-3">
                      <Link to="/cursos/react"><img className="s-radius-1" src={cl.picture} alt={cl.name}/></Link>
                      <div className="m-cols-2">
                        <h3>{cl.name}</h3>
                        <p>{cl.information}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
       </>
     }
    </>
  )
}

const mapStateToProps = state => ({
  speciality: state.specialityReducer.specialities[0]
})

export default connect(mapStateToProps, {})(Especialidad)
