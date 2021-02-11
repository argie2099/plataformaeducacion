import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BannerWeb from '../../Molecules/BannerWeb';
import store from '../../../Redux/store'
import { getAllPost } from '../../../Redux/actionCreators';
import Publication from '../../Organisms/Publication';



const Home = ({posts}) => {

  useEffect(() => {
    store.dispatch(getAllPost())
  }, [])

  return (
    <>
      <BannerWeb 
      Title="Bienvenido a StudX"
      Subtitle="La comunidad de programación más grande de Argentina"
      img="https://www.apat.org.ar/img/elemento/grande/7200/7101/7101-5931-20170620-F50.jpg"
      bg="https://www.apat.org.ar/img/elemento/grande/7200/7101/7101-5931-20170620-F50.jpg"
      color=""
      home
      />
  
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          <div>
            {
              posts ?
              <div>{ posts.map(p => <Publication
               author={p.author}
               content={p.content}
               date={p.fecha}
               key={p.id}
               title={p.title}
               />)}</div>
              :
              <span>No hay posts de la comunidad.</span>
            }
          </div>
        </div>
      </main>
    </>
  )
}

const mapStatetoProps = state => ({
  posts: state.postReducer.posts
})


export default connect(mapStatetoProps, {})(Home)
