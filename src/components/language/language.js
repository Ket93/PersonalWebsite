import React, { Component } from "react";
import "./language.css";

class Language extends Component {


    render() {

        const { language } = this.props;

        if (language === "Java") {
            return (
                <p style={{ color: "#ff3838" }} className="languageText">{language} </p>
            );
        } else if (language === "MongoDB") {
            return (
                <p style={{ color: "#aaff66" }} className="languageText">{language} </p>
            );
        } else if (language === "Python") {
            return (
                <p style={{ color: "#fcff63" }} className="languageText">{language} </p>
            );
        } else if (language === "Pygame") {
            return (
                <p style={{ color: "#f9e31d" }} className="languageText">{language} </p>
            );
        } else if (language === "JavaScript") {
            return (
                <p style={{ color: "#ff864f" }} className="languageText">{language} </p>
            );
        } else if (language === "Flask") {
            return (
                <p style={{ color: "#d6d6d6" }} className="languageText">{language} </p>
            );
        } else if (language === "GCP") {
            return (
                <p style={{ color: "#87f5ff" }} className="languageText">{language} </p>
            );
        } else if (language === "HTML") {
            return (
                <p style={{ color: "#ffa749" }} className="languageText">{language} </p>
            );
        } else if (language === "CSS") {
            return (
                <p style={{ color: "#2b63ff" }} className="languageText">{language} </p>
            );
        } else if (language === "React.js") {
            return (
                <p style={{ color: "#2fdef9" }} className="languageText">{language} </p>
            );
        } else if (language === "Business") {
            return (
                <p style={{ color: "#ff7530" }} className="languageText">{language} </p>
            );
        } else if (language === "Web Dev") {
            return (
                <p style={{ color: "#2160ff" }} className="languageText">{language} </p>
            );
        } else if (language === "Club") {
            return (
                <p style={{ color: "#f943c6" }} className="languageText">{language} </p>
            );
        } else if (language === "Internship") {
            return (
                <p style={{ color: "#ff2c19" }} className="languageText">{language} </p>
            );
        }
    }
}

export default Language;
