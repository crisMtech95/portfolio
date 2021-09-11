import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './NavBar.css'

export default function Navbar({ setShowSideBar, showSideBar }) {


    return(
        <div className="Navbar__mainContainer">
            <div className="NavBar__homeIconDiv">
                <div className="NavBar__homeIcon" />
            </div>
            <div className="NavBar__burgerMenuDiv" onClick={e => setShowSideBar(!showSideBar)}>
                <div className="NavBar__burgerMenu"/>
            </div>
        </div>
    )
}
