import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components';
import tower from "./images/harkness.jpg";
import productiveperson from "./images/productive.jpg"

const Styles = styled.div`
    .jumbo {
        background: url(${productiveperson}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 400px;
        position: relative;
        z-index: -2;
    
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="join_us">Welcome to Productive.io</h1>
            </Container>
        </Jumbo>
    </Styles>
)

