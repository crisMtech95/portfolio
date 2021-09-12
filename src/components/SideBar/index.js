import React, { useEffect, useRef } from 'react';
// import { useParams, Link, NavLink } from 'react-router-dom';
import './SideBar.css'
import { Link } from 'react-scroll';

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
            <div
                className="SideBar__closeDiv"
                onClick={e => setShowSideBar(false)}
            >
                <div className="SideBar__closeImg"/>
            </div>
            <div className="SideBar__container">
                <Link to="home" spy={true} smooth={true} duration={1000}>Home</Link >
                <Link to="about" spy={true} smooth={true} duration={1000}>About</Link >
                <Link to="skills" spy={true} smooth={true} duration={1000}>Skills</Link >
                <Link to="projects" spy={true} smooth={true} duration={1000}>Projects</Link >
                <Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link >
                <Link to="resume" spy={true} smooth={true} duration={1000}>Resume</Link >
                <p>_________</p>
            </div>
        </div>
    )
}
