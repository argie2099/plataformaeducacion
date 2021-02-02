import React from 'react';
import { Link } from 'react-router-dom';

const BannerWeb = ({Title, Subtitle, bg, img, home, isCourse, color}) => {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="eg-grid">
        <div className="">
          <img src={bg} alt="Main banner" className="main-banner__img"/>
          {
            home ?
              <div className="ed-grid m-grid-2 s-cross-center">
                <div className="">
                  <div className="main-banner__data s-center">
                    <h1 className="main-banner__title">{Title}</h1>
                    <p>{Subtitle}</p>
                    <Link to="/cursos" className="button accent-color">Ver cursos</Link>
                  </div>
                </div>
                <div className="img-container s-ratio-16-9 s-radius">
                  <Link to="/cursos">
                    <img src={img} alt="Curso actual" />
                  </Link>
                </div>
              </div>
            :
              isCourse ?
              <div className="ed-grid m-grid-3 s-cross-center">
                <div className="main-banner__data m-cols-2">
                    <h1 className="main-banner__title">{Title}</h1>
                    <p>{Subtitle}</p>
                </div>
                <div className="img-container s-ratio-16-9 m-cols-1 s-radius-1">
                    <img src={img} alt="Curso actual" />
                </div>
              </div>
              :
              <div className="main-banner__data s-center">
                <h1 className="main-banner__title">{Title}</h1>
                <p>{Subtitle}</p>
              </div>
          }
        </div>
      </div>
    </div>
  );
}
 
export default BannerWeb;
