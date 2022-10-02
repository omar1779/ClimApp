import React from 'react';
import SearchBar from './SearchBar.jsx';
import {WiNightAltCloudyHigh} from "react-icons/wi";
import { AiFillDatabase } from "react-icons/ai";
import {Link} from "react-router-dom"
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className={'container-nav shadow-lg'}>
      <div className={'container-title'}>
        <Link to="/"
        style={{
          textDecoration: 'none' ,
          "color" : "white"
        }}>
      <WiNightAltCloudyHigh className='WiNightAltCloudyHigh'/>
        <h1 className='titulo-nav'>ClimApp</h1>
        </Link>
      </div>
      <div className='container-search'>
          <Link to='/about'
            style={{
              textDecoration: 'none' ,
              "color" : "white"
            }}
          >
            <h5 className='about-text'>
              About me!
            </h5>
        <AiFillDatabase
        style={{
          "height" : "32px",
          "width" : "32px",
          "color" : "white",
        }}/>
        </Link>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
