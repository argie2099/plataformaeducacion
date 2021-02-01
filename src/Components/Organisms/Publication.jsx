import React from 'react';

const Publication = ({ id, author, title, date, content}) => {
  return (
    <div className="s-border l-block s-radius s-shadow-bottom s-pxy-4 publication">
      <div className="l-block">
        <p className="t3">{title}</p>
        <span className="t4 s-mr-4">{author} </span>
        <span>{date}</span>
      </div>
      <div className="">
        {content}
      </div>
    </div>
  );
}
 
export default Publication;
