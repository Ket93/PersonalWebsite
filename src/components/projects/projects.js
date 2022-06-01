import React from 'react';
import ComplexCard from ".././complexCard/complexCard.js";
import MasseyMonPic from "../../images/masseyMonActual.PNG";
import JPropertyPic from "../../images/JProperty.PNG";
import paintPic from "../../images/paint.png";
import CoverMasterPic from "../../images/CoverMaster.png";
import latexSolverPic from "../../images/latexsolver.PNG";
import spaceInvadersPic from "../../images/spaceInvaders.png";
import marioPic from "../../images/mario.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./projects.css";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';
const MySwal = withReactContent(Swal);

const Projects = () => {

    function coverMaster() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/CoverMaster/blob/main/extension/images/coverMasterActual.PNG?raw=true",
            imageWidth: 470,
            imageHeight: 300,
            title: '<b>CoverMaster<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>CoverMaster is a project made at NWHacks 2022 designed to help students specifically at the University of Waterloo easily create cover letters to apply for jobs. CoverMaster scrapes data from the current job posting and automatically fills in a cover letter with the company information, key traits and skills, and more, providing a high quality cover letter with the click of a button.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/CoverMaster"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' </div> '

        })
    }

    function jProperty() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/564/224/datas/gallery.jpg",
            imageWidth: 430,
            imageHeight: 300,
            title: '<b>jProperty<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>JProperty is a Java GUI created at MasseyHacks VII. It combines Java Swing with MongoDB to create a nice user interface to search for properties for sale in the area and Airbnbs worldwide. I mainly worked on the front end, using Java Swing to create the layout and design of the interface.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/jProperty"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://devpost.com/software/jproperty"><span class="spot"></span><b>Devpost<b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> '

        })
    }

    function christmasPaint() {
        Swal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            title: '<b>Christmas Paint<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            imageUrl: "https://github.com/Ket93/ICS3U-Paint-Project/blob/main/Images/paint.png?raw=true",
            imageWidth: 430,
            imageHeight: 300,
            html:
                '<p>Made as a midterm project for the ICS3U course, Christmas Paint is a Christmas themed remix of the traditional Microsoft Paint application. Made using Python and Pygame, the application incorporates the features of MS Paint, as well as backgrounds, soundtracks, and stickers, in a fun Christmas theme.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/ICS3U-Paint-Project"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' </div> '

        })
    }

    function masseyMon() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/MasseyMon/blob/master/Images/Backgrounds/pokemon.PNG?raw=true",
            imageWidth: 370,
            imageHeight: 300,
            title: '<b>MasseyMon<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>MasseyMon was a Java Swing project created for the final summative evaluation of the ICS4U course. Inspired by the original Pokemon Red and Pokemon Blue games, we created a mini-version of the game while incorporating some of our favorite teachers and memories from our time at our high school, Vincent Massey.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/MasseyMon"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' </div> '

        })
    }

    function latexSolver() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/920/590/datas/original.png",
            imageWidth: 370,
            imageHeight: 300,
            title: '<b>Latex Matrix Solver<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>LaTeX Matrix Solver is a site to make the lives of Linear Algebra students easier. It allows the user to enter any matrix and will give the reduced row echelon form of that matrix as well as providing the LaTeX of that matrix that can be easily copied into any assignment or document. The user can also input the LaTeX markup for a matrix and the RREF matrix will be returned with the LaTeX markup as well.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/Latex-Matrix-Solver"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://devpost.com/software/ultimate-latex-matrix-solver"><span class="spot"></span><b>Devpost<b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> '

        })
    }

    function mario() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/CS11-Mario/blob/main/mario.PNG?raw=true",
            imageWidth: 370,
            imageHeight: 300,
            title: '<b>Super Mario Bros<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>Made using Python and Pygame, this game is a mini throwback to the original Super Mario Bros games. Incorporating some of the best stages from the original games as well as many of the same features and mechanics such as power-ups, coin grabbing, and enemy stomping, the player can experience the best of the retro game.</p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/CS11-Mario"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' </div> '

        })
    }

    function spaceInvaders() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://images.theconversation.com/files/221251/original/file-20180531-69508-1oenzpj.png?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=608&fit=crop&dpr=1",
            imageWidth: 370,
            imageHeight: 300,
            title: '<b>Space Invaders<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>A replica of the retro space invaders game created using Java Swing. The game incorporates the same shooting and movement mechanics are the orginal space invaders game and allows the uesr to pick up power ups dropped from defeated enemies and track their high scores. </p>' +
                ' <div class="svg-wrapper">' +
                ' <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg"> ' +
                '<rect id="shape" height="40" width="150" /> ' +
                ' <div id="text"> ' +
                ' <a class="githubButton" href="https://github.com/Ket93/Space-Invaders"><span class="spot"></span><b>Github</b></a> ' +
                ' </div> ' +
                ' </svg> ' +
                ' </div> ' +
                ' </div> '

        })
    }

    return (

        <>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
            </link>

            <div id="projects"></div>
            <div className="blackBackground">
                <h1 className="projectsTitle">Projects</h1>
                <hr className="line" />
            </div>

            <div className="projectsContainer container-fluid ">
                <div class="projectsContainerInner row justify-content-evenly">
                    <div style={{ display: "inline", width: "350px" }} onClick={coverMaster}>
                        <ComplexCard
                            className="projectsCard"
                            title="CoverMaster"
                            image={CoverMasterPic}
                            languages={["JavaScript", "Python", "Flask", "GCP"]}
                            description="Made at NWHacks 2022"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={christmasPaint}>
                        <ComplexCard
                            className="projectsCard"
                            title="Christmas Paint"
                            image={paintPic}
                            languages={["Python", "Pygame"]}
                            description="Made as an ICS3U midterm project"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={jProperty}>
                        <ComplexCard
                            className="projectsCard"
                            title="JProperty"
                            image={JPropertyPic}
                            languages={["Java", "MongoDB"]}
                            description="Made at MasseyHacks VII"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={masseyMon}>
                        <ComplexCard
                            className="projectsCard"
                            title="MasseyMon"
                            image={MasseyMonPic}
                            languages={["Java"]}
                            description="Made as an ICS4U final project"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={mario}>
                        <ComplexCard
                            className="projectsCard"
                            title="Super Mario Bros"
                            image={marioPic}
                            languages={["Python", "Pygame"]}
                            description="Made as an ICS3U Final Project"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={latexSolver}>
                        <ComplexCard
                            className="projectsCard"
                            title="LaTeX Matrix Solver"
                            image={latexSolverPic}
                            languages={["HTML", "CSS", "JavaScript", "React.js",]}
                            description="Made at DragonHacks 2022"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={spaceInvaders}>
                        <ComplexCard
                            className="projectsCard"
                            title="Space Invaders"
                            image={spaceInvadersPic}
                            languages={["Java"]}
                            description="Made as an ICS4U Midterm Project"></ComplexCard>
                    </div>
                </div >
            </div >
            <div className="projectsDivider"></div>
        </>
    );
};





export default Projects;