import React from 'react';
import './Card.css';
import {Link} from "react-router-dom"

export default function Card ({min, max, name, img, onClose, id,nubes,latitud,longitud,temperatura,clima}) {
    return (
      <div className="card shadow-lg">
        <div id="closeIcon" className="row">
          <button style={{
            "backgroundColor" : "#001a3d",
            "color": "white"
          }} onClick={onClose} className="btn btn-sm">X</button>
        </div>
        <div className="card-body">
          <Link to={`/city/${id}`}
          style={{
            textDecoration: 'none' ,
            "color" : "black"
          }}
          >
            <h5 className="card-title">{name}</h5>
          </Link>
          <div style={{
          "backgroundColor": "#001a3d",
          "borderRadius": "5px",
          "color" : "white"
        }} className="row row-query">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Nubes : {nubes}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Latitud : {latitud}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Longitud : {longitud}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Temperatura : {temperatura}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Clima : {clima}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};
