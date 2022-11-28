import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


class Navbar extends React.Component{
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
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#about">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="danger" onClick={() => {
                            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
                            window.location.reload()
                            }}>
                            Change Mode
                        </Button>
                    </Nav.Item>
                </Nav>
            </>     
        )
    }
}

export default Navbar