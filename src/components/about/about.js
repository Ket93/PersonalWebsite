import React, { Component } from "react";
import gradPic from "../../images/kevingradpic.jpg";
import "./about.css";

class About extends Component {

    render() {

        return (
            <>
                <div id="About" className="aboutContainer">
                    <img src={gradPic} className="gradPic" alt="" />
                    <div className="aboutDescriptionDiv">
                        <h2 className="aboutHeading">About Me</h2>
                        <p className="aboutText" >Hey! I'm Kevin. I'm a CS/BBA student at The University of Waterloo from Windsor, Ontario. I'm currently working as a
                            <span className="jobTitleText"> <b>Full Stack Developer at Caribou Contests</b> </span> and searching for a co-op for the Winter 2023 term! </p>
                        <p className="aboutText">In my free time I like coding, going to the gym, and taking trips with my friends.
                            I also enjoy playing sports, you can always find me at the Waterloo basketball and tennis courts, I'm also getting into badminton!
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default About;
