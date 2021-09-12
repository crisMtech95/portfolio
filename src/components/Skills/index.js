import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Skills.css'

export default function Skills() {

    return(
        <div className="Skills__mainContainer" id="skills">
            <div  className="Skills__container">
                <h2>Skills</h2>
                <div className="Skills__imagesDiv">
                    <div className="Skills__image Skills__js"></div>
                    <div className="Skills__image Skills__python"></div>
                    <div className="Skills__image Skills__redux"></div>
                    <div className="Skills__image Skills__react"></div>
                    <div className="Skills__image Skills__flask"></div>
                    <div className="Skills__image Skills__express"></div>
                    <div className="Skills__image Skills__psql"></div>
                    <div className="Skills__image Skills__nodejs"></div>
                    <div className="Skills__image Skills__git"></div>
                    <div className="Skills__image Skills__docker"></div>
                    <div className="Skills__image Skills__heroku"></div>
                    <div className="Skills__image Skills__html"></div>
                    <div className="Skills__image Skills__css"></div>
                    <div className="Skills__image Skills__sequelize"></div>
                </div>
                {/* <div className="Skills__personalImgDiv">
                    <div className="Skills__personalImg" />
                </div> */}

            </div>
        </div>
    )
}
