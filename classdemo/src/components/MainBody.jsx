import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import React from "react";

class MainBody extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
        }
    }

    render(){
        return(
            <>
                <body className={`App-main-body ${this.state.theme} ${this.state.count}`}>
                    <Skills></Skills>
                    <Projects></Projects>
                    <Experience></Experience>
                    <Contact></Contact>
                </body>       
            </>     
        )
    }
}

export default MainBody
