import React from "react";
import html from "../images/html.svg"
import css from "../images/css.svg"
import javascript from "../images/javascript.svg"
import bootstrap from "../images/bootstrap.svg"
import mongodbXXX from "../images/mongodb.svg"

function Skills() {
    return(
            <section className="skills" id="skills">
                <h2 className="skill-header">My Skills</h2>
                <img className="icon icon-card" src={html} alt="alt text" />
                <img className="icon icon-card" src={css} alt="alt text" />
                <img className="icon icon-card" src={javascript} alt="alt text" />
                <img className="icon icon-card" src={bootstrap} alt="alt text" />
                <img className="icon icon-card" src={mongodbXXX} alt="alt text" />
            </section>
    )
}

export default Skills