import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Projects.css'

export default function Projects() {

    return(
        <div className="Projects__mainContainer">
            <div>
                <h2>Four Projects, Done from scratch without guides</h2>
            </div>
            <div className="Projects__container">
                <div className="Projects__SingleProjectDiv">
                    <h3>All-bnb</h3>
                    <div className="Projects__imageDiv allbnbImg"></div>
                </div>
                <div className="Projects__SingleProjectDiv">
                    <h3>Audify</h3>
                    <div className="Projects__imageDiv audifyImg"></div>
                </div>
                <div className="Projects__SingleProjectDiv">
                    <h3>Sportsgram</h3>
                    <div className="Projects__imageDiv sportsgramImg"></div>
                </div>
                <div className="Projects__SingleProjectDiv">
                    <h3>Stack-OilFlow</h3>
                    <div className="Projects__imageDiv stack-oilFlowImg"></div>
                </div>
            </div>
        </div>
    )
}
