import React from 'react';

const Teachers = ({name, country, picture}) => {
  return (
    <article>
    <div className="s-px-4 m-px-2">
      <div className="img-container circle s-mb-2">
        <img src={picture} alt={name} />
      </div>
    </div>
    <div className="center">
      <p className="t3">{name}</p>
      <p>{country}</p>
    </div>
  </article>
  );
}
 
export default Teachers;
