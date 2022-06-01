import React from 'react';
import ComplexCard from ".././complexCard/complexCard.js";
import decaPic from "../../images/deca.PNG";
import debatePic from "../../images/debateLogo.PNG";
import chessPic from "../../images/chess.PNG";
import ufoPic from "../../images/ufo.PNG";
import caribouPic from "../../images/caribou.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./experience.css";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';
const MySwal = withReactContent(Swal);

const Experience = () => {

    function deca() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/Personal-Website/blob/main/Images/deca.jpg?raw=true",
            imageWidth: 470,
            imageHeight: 300,
            title: '<b>DECA<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>DECA is a club I was in for the entirety of my time in high school. It is a business club that has chapters worldwide with students competing in regional, provincial, and international competitions every year. During my Grade 12 year I served as the president of my school\'s chapter, leading a club with over 100 members. I taught lessons, organized events such as the Massey DECA Competition, and planned trips to comeptitions. In addition, I placed within the top 18 in Ontario at the provincial competition 2 years in a row (2020-2021) in my event, Financial Team Decision Making. From meeting new people to traveling, being a part of DECA was one of the most fun and impactful experiences I had in high school.</p>'

        })
    }

    function debate() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/Personal-Website/blob/main/Images/debate.png?raw=true",
            imageWidth: 430,
            imageHeight: 300,
            title: '<b>Debate Club<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>The Debate Club is another longtime high school club that I joined in Grade 9 and never left. I was never the most outgoing person but debate really helped me find my voice and gave me the confidence to speak publicly. I became a vice-president of the club in Grade 11 and was selected to represent my school at tournaments such as the Odette Debate Competition. I met lots of talented and motivated people through debate and it is one of the experiences that has shaped who I am today.</p>'

        })
    }

    function chess() {
        Swal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            title: '<b>Chess Club<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            imageUrl: "https://github.com/Ket93/Personal-Website/blob/main/Images/chess.jpg?raw=true",
            imageWidth: 430,
            imageHeight: 300,
            html:
                '<p>I have been playing chess competitively for over 7 years. Since I was in Grade 5 I have competed in school, regional, provincial, and national tournaments, scoring within the top 20 for my age group in 2016. I joined the Massey Chess Club in Grade 9 and competed in the Ontario High School Chess Challenge two times winning 1st as a school both years as well as individual section and age group medals. I met lots of my closest friends and mentors through the chess community and created everlasting memories as well.</p>'

        })
    }

    function ufo() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://github.com/Ket93/Personal-Website/blob/main/Images/ufoPic.PNG?raw=true",
            imageWidth: 430,
            imageHeight: 300,
            title: '<b>UW Finance Organization<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>For the Universal Finance Club, I worked with a team to help plan and develop the initial version of the club website. The team worked to build the layout and design of the site, secure the domain names, and fill the website with club information. The club hosts many events, talks, and podcasts to help students learn more about finance and make more informed decisions with their money.</p>'

        })
    }

    function caribou() {
        MySwal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            imageUrl: "https://cariboutests.com/images/homepage-banner/cariboucovid.jpg",
            imageWidth: 430,
            imageHeight: 300,
            title: '<b>Caribou Contests Inc.<b>',
            width: 600,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<p>As a developer for Caribou Contests for the Spring 2022 term, I work on the company website and implement new features. Using PHP and JavaScript as well as SQL and Linux, I work to make the website a more safe and interactive experience for the students using it. I also use it to help administer and oversee the contests held throughout the year for students around the world.</p>'

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

            <div className="blackSpace">
                <div id="experiences" className="backgroundColorExperience"></div>
            </div>
            <div className="blackBackgroundExperience">
                <h1 className="experienceTitle">Experience</h1>
                <hr className="line" />
            </div>

            <div className="experienceContainer container-fluid ">
                <div class="experienceContainerInner row justify-content-evenly">

                    <div style={{ display: "inline", width: "350px" }} onClick={caribou}>
                        <ComplexCard
                            className="experienceCard"
                            title="Caribou Contests Inc."
                            image={caribouPic}
                            languages={["Internship", "Web Dev"]}
                            description="Full-Stack Developer"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={debate}>
                        <ComplexCard
                            className="experienceCard"
                            title="Vincent Massey Debate Club"
                            image={debatePic}
                            languages={["Club"]}
                            description="Vice President"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={deca}>
                        <ComplexCard
                            className="experienceCard"
                            title="Vincent Massey DECA"
                            image={decaPic}
                            languages={["Club", "Business"]}
                            description="President"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={chess}>
                        <ComplexCard
                            className="experienceCard"
                            title="Vincent Massey Chess Team"
                            image={chessPic}
                            languages={["Club"]}
                            description="Executive"></ComplexCard>
                    </div>

                    <div style={{ display: "inline", width: "350px" }} onClick={ufo}>
                        <ComplexCard
                            className="experienceCard"
                            title="UW Finance Organization"
                            image={ufoPic}
                            languages={["Club", "Web Dev", "Business"]}
                            description="Web Developer"></ComplexCard>
                    </div>

                </div >
            </div >
            <div className="experienceDivider"></div>
        </>
    );
}

export default Experience;