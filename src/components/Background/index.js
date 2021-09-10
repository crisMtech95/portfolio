import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Background.css'

export default function Background() {


    let [name, setName] = useState("")
    let divRef = useRef()
    let [description, setDescription] = useState("My name is Cristhian Morales, I'm a Software Engineer")
    let info = ""
    let firstLength = description.length

    useEffect(() => {
        // if (name.length === 54 ) {
        //     console.log("THIS IS NAME", name)
        //     setDescription(name)
        //     console.log("THIS IS DESCRIPTION", description)
        //     name.split("").forEach(el => {
        //         if (name.length > 1) {

        //             setTimeout(() => {
        //                 setName(name.slice(0, -1))
        //             }, 100)
        //         } else {
        //             setName("")
        //         }
        //     })
        // }

        if (name.length < 54 && name.length !== 0) {
            setTimeout(() => {
                setName(name + description[0])
                if (description.length >= 2)
                setDescription(description[1] + description.slice(2))
            }, 150)
        } else if (!name) {
            setTimeout(() => {
                setName(description[0])
                if (description) {
                    setDescription(description[1] + description.slice(2))
                }
            }, 150)
        }
    }, [description])

    return(
        <div className="Background__mainContainer">
            <div className="Background__bgImageDiv">
              <div className="Background__bgImage"></div>
              {/* <div className="Background__textContainer">
                <div className="Background__textDiv"> */}
                    <div className="Background__text">
                        <h2>Hello!</h2>
                        <div>{name}</div>
                        {/* <div>I'm a Software Engineer</div> */}
                    </div>
                {/* </div>
              </div> */}

            </div>
        </div>
    )
}
