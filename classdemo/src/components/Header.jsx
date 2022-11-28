import React from "react";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component{
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
            <header className={`App-header ${this.state.theme} ${this.state.count}`}>
                <h1 className="mt-5">Austin Lee, Web Developer</h1>
                <About></About>
            </header>
            </>     
        )
    }
}

export default Header