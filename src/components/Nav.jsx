import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {Nav, NavbarBrand, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #3b5998;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                Productive.io
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/DHall">Activity</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
