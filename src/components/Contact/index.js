import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Contact.css'

export default function Contact() {

    return(
        <div className="Contact__mainContainer"  id="contact">
            <div className="Contact__container">
                <div className="Contact__msgDiv">
                    <h2>Contact</h2>
                    <p>Feel free to contact message me about collaborations, job opportunities, questions or just to say hi.</p>
                </div>
                <div className="Contact__infoMainDiv">
                    <div className="Contact__infoDiv">
                        <h4>Name : </h4>
                        <p>Cristhian Morales</p>
                    </div>
                    <div className="Contact__infoDiv">
                        <h4>Email : </h4>
                        <p>cmg.95.col@hotmail.com</p>
                    </div>
                    <div className="Contact__infoDiv">
                        <h4>Location : </h4>
                        <p>Queens, Ny</p>
                    </div>
                    <div className="Contact__infoDiv">
                        <h4>Github : </h4>
                        <p>crisMtech95</p>
                    </div>
                    <div className="Contact__infoDiv">
                        <h4>LinkedIn : </h4>
                        <p>crisMtech95</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
