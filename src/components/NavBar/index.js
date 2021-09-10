import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './NavBar.css'

export default function Navbar() {

    return(
        <div className="Navbar__mainContainer">
            <div className="NavBar__homeIconDiv">
                <div className="NavBar__homeIcon" />
            </div>
            <div className="NavBar__burgerMenuDiv">
                <div className="NavBar__burgerMenu"/>
            </div>
        </div>
    )
}
