import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getAllSpecialities } from "../../../Redux/actionCreators"
import store from "../../../Redux/store"
import BannerWeb from "../../Molecules/BannerWeb"
import CourseCard from "../../Organisms/CourseCard"

const Especialidades = ({especialidades}) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])

  return (
    <>
      <BannerWeb
      Title='Especialidades'
      Subtitle='Conviertete en un profesional con un solido y amplio conocimiento tomando nuestras especialidades'
      bg='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/06/108191-webassembly-pretende-ser-nuevo-estandar-programacion-web.jpg?itok=NvuuYPF-'
    />
    <div className="ed-grid m-grid-2 lg-grid-3">
      {
        especialidades &&
        especialidades.map( e => {
          return(
            <CourseCard 
            name={e.data.name} 
            picture={e.data.picture}
            general_route="especialidades"
            key={e.data.id}
            iden={e.data.slug}
            />
          )
        })
      }
    </div>
    </>
  )
}

const mapStateToProps = state => ({
  especialidades: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {})(Especialidades)
