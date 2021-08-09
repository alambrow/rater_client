import React from "react"
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'


export const NavBar = (props) => {
    return (
        <>
        <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-1" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-2" href="/games">Games</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-3" href="/categories">Categories</Nav.Link>
            </Nav.Item>
                {
                    (localStorage.getItem("lu_token") !== null) ?
                        <Nav.Item className="nav-item">
                            <Nav.Link className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    props.history.push({ pathname: "/" })
                                }}
                            >Logout</Nav.Link>
                        </Nav.Item> :
                        <>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" to="/register">Register</Nav.Link>
                            </Nav.Item>
                        </>
                } 
            </Nav>
            </>
    )
}