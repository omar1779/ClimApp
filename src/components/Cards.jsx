import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import img from "../img/climApp.png"
export default function Cards({cities, onClose}) {
    return (
      <>{cities.length !==0?
      <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          nubes={c.clouds}
          latitud={c.latitud}
          longitud={c.longitud}
          temperatura={c.temp}
          clima={c.weather}
          onClose={() => onClose(c.id)}
        /> )}
      </div>
    : <div className='container'>
        <div className='container-text'>
        <h2 className='text-home'><strong>Bienvenido a ClimApp</strong></h2>
        <p className='parrafo-home'>
        En qué podemos ayudarte hoy?... <br />
        shhh , no digas mas se lo a lo que viniste!! <br />
        para buscar el clima de un pais o ciudad ,no?... <br />
        despues de todo somos una App del Clima
        , utiliza el buscador , <strong>¡Auf Wiedersehen!👋🏻</strong>
        </p>
        <img className='image-text' src={img} alt="climApp" />
        </div>
      </div>
    }
      </>
    );
}
