import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './SideBar.css'

export default function SideBar({ setShowSideBar }) {
    const sideRef = useRef()

    useEffect(()=> {

        const clickOut = e => {
            if (!sideRef.current.contains(e.target)) {
                setShowSideBar(false)
            }
        }
        document.addEventListener("mousedown", clickOut)

        return () => {
            document.removeEventListener("mousedown", clickOut)
        }
    }, [])

    return(

        <div
            className="SideBar__mainContainer"
            ref={sideRef}>
            
            <div className="SideBar__container">
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Contact</p>
                <p>Resume</p>
                <p>_________</p>
            </div>
        </div>
    )
}
