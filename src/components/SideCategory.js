import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/SideCategory.scss';


function SideCategory(props) {
  return (
    <div className="nav">
      <div className="nav-items">
        <Link to={props.url}>{props.category0}</Link>
      </div>
      <div className="nav-items">
        <h2>{props.category1}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category2}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category3}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category4}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category5}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category6}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category7}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category8}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category9}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category10}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category11}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category12}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category13}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category14}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category15}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category16}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category17}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category18}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category19}</h2>
      </div>
      <div className="nav-items">
        <h2>{props.category20}</h2>
      </div>
    </div>
  )
}

export default SideCategory;
