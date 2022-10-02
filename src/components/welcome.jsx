import React from "react";
import "./Welcome.css"
import { WiNightAltHail } from "react-icons/wi";
import {Link} from "react-router-dom"
export default function Welcome () {
    return (
        <>
            <div className="container-welcome">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                <Link to="/home"
                style={{
                    textDecoration: 'none' ,
                    "color" : "white"
                }}
                >
                <h1 className="title-welcome">ClimApp</h1>
                <WiNightAltHail className="WiNightAltHail"/>
                </Link>
            </div>
            </div>
        </>
    )
}