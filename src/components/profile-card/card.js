import PFP from "../.././images/aboutImage1.png";
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Card = () => {

    return (

        <>
            <div id="home" className="mainBackground">
                <div className="card" data-state="#about">

                    <div id="card-header">
                        <div className="card-cover" style={{ backgroundImage: "url('https://images.unsplash.com/')" }}></div>

                        <img className="card-avatar" src={PFP} alt=""></img>

                        <h1 className="card-name">Kevin Cui</h1>
                        <h2 className="card-title">University of Waterloo</h2>

                    </div>



                    <div className="card-main">
                        <div className="card-section is-active" id="about">
                            <div className="card-content">

                                <div className="card-subtitle">ABOUT</div>
                                <p className="card-desc">Hey there! I'm Kevin, a Computer Science and Business Administration (2A)
                                    student currenly studying at the University of Waterloo. Look around to get to know a bit more about me!</p>

                            </div>

                            <div className="card-social">

                                <a className="facebook" href="https://www.facebook.com/kevin.cui.10/"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>

                                <a className="instagram" href="https://www.instagram.com/kevincui113/"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                                    <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                                    <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>

                                <a className="linkedin" href="https://www.linkedin.com/in/kevincui93/"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" /></svg></a>

                            </div>
                        </div>

                        <div className="card-section" id="experience">
                            <div className="card-content">
                                <div className="card-subtitle">WORK EXPERIENCE</div>
                            </div>
                            <div className="card-timeline">

                                <div className="card-item" data-year="2018">
                                    <div className="card-item-title">Server at <span>Fogular Furlan Club</span></div>
                                    <div className="card-item-desc">Worked in a team to serve customers at various local events and functions</div>
                                </div>

                                <div className="card-item" data-year="2020">
                                    <div className="card-item-title">Private Tutor</div>
                                    <div className="card-item-desc">Tutored students from K-12 in English, math, computer science, etc.</div>
                                </div>

                                <div className="card-item" data-year="2022">
                                    <div className="card-item-title">Full-Stack Developer at <span>Caribou Contests</span></div>
                                    <div className="card-item-desc">Developed the website for a math contest written by 40,000+ students worldwide</div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="card-section" id="contact">
                        <div className="card-content">
                            <div className="card-subtitle">CONTACT</div>
                            <div className="card-contact-wrapper">
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    https://github.com/Ket93
                                </div>
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path
                                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>(519) 973-9748
                                </div>
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>
                                    k8cui@uwaterloo.ca
                                </div>
                                <button className="contact-me"> <a id="openEmail" href="mailto: k8cui@uwaterloo.ca">GET IN TOUCH</a> </button>
                            </div>
                        </div>
                    </div>


                    <div className="card-buttons">
                        <button data-section="#about" className="is-active" onClick={handleButtonClick}>ABOUT</button>
                        <button data-section="#experience" onClick={handleButtonClick}>WORK EXPERIENCE</button>
                        <button data-section="#contact" onClick={handleButtonClick}>CONTACT</button>
                    </div>
                </div>
            </div>
        </>
    );
};

const handleButtonClick = e => {
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};




export default Card;