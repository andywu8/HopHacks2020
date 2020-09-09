import React, { useState } from "react";
import {Jumbotron} from './Jumbotron'


export function Home() {
    return (
        <React.Fragment >
        <Jumbotron></Jumbotron>
        <div>
            <p> 
                Because of quarantine due to COVID-19, people feel lost and feel that they have lost their sense of purpose. However, it's important more than ever, to stay productive, focus on your mental health, and be happy! With Productive.io, people can continue to thrive while in quarantine and stay productive. Thus we encourage people to stay active, learn new skills such as coding or cooking, and share their progress with others.
            </p>
        </div>
        </React.Fragment>
    )
}

export default Home
