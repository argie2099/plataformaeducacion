import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({name, picture, iden, general_route}) => (
      <article className="card s-border">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <Link to={`/${general_route}/${iden}`}>
            <img src={picture} alt={name}/>
          </Link>
        </div>
        <div className="card__data s-px-2 s-pt-2">
          <h3 className="t4 s-mb-2 s-center">{name}</h3>
        </div>
      </article>
)

export default CourseCard;
