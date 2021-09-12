import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Footer.css'

export default function Footer() {


    return(
        <div className="Footer__mainContainer" id="footer">
            <a className="Footer__githubDiv" href="https://github.com/crisMtech95" target="_blank"
                ><div className="Footer__githubDiv" />
            </a>
            <a className="Footer__Linked-In" href="https://www.linkedin.com/in/cristhian-morales-526b85215/" target="_blank">
                <div className="Footer__linkedInDiv"/>
            </a>
        </div>
    )
}
