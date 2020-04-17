import React from 'react'

export const projects = [
    {
        name: 'beam up',
        subtitle: 'INTERACTIVE 3D EXPLORATION',
        imageurl: 'https://i.imgur.com/0ffPh9H.jpg',
        url: 'https://beam-up.herokuapp.com',
        displayurl: 'beamup.space',
        desc: 'Beam Up is an ethereal, immersive 3D experience that sends a user on a journey beyond our solar system, ultimately revealing the beauty and splendor of the existence of life on earth. Traveling through the universe, the user will discover different earth-like exoplanets to be considered for possible human habitation, and end the journey with a wish for the universe. Interacting with each planet reveals data sourced from NASA along with its habitability status. Aesthetically, this web app has a dreamy, uplifting, feminine feel, and implements the NERDS stack in combination with Three.JS to bring the 3D space to life.',
        video: <iframe title="beam-up" width="480" height="270" src="https://www.youtube.com/embed/00jnzkbM1c4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        name: 'fitby',
        subtitle: 'FITNESS APP',
        imageurl: 'https://i.imgur.com/qmNNsRx.jpg',
        url: 'https://fitby.herokuapp.com',
        displayurl: 'fitby.herokuapp.com',
        desc: "Fitby is a minimalist, data-driven fitness dashboard. In response to the information overload tracked by conventional fitness apps, this simple, lightweight solution allows users to monitor just two key datasets: fitness and nutrition. A delightful interface is crafted in Figma and executed with Material-UI, Animate.css, and lots of pure CSS. The backend is scaffolded on Node.js, Express, Sequelize, and PostgreSQL. Finally, beautiful data visualizations are achieved with Recharts, a charting library that integrates React, D3, and SVG. Fitby is the winner of the Sigurdsson Award for best UI Design at Fullstack's Hackathon.",
        video: <iframe title="fitby" width="480" height="270" src="https://www.youtube.com/embed/evIw24LYeZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        name: 'pluto games',
        subtitle: 'E-COMMERCE WEBSITE',
        imageurl: 'https://i.imgur.com/UFdLsn3.jpg',
        url: 'https://pluto-games.herokuapp.com',
        displayurl: 'pluto-games.herokuapp.com',
        desc: "Pluto Games is an e-commerce website that sells tabletop board & card games. Front-end cart and inventory components were designed and developed by integrating  React, Redux, Material-UI, CSS, and the Stripe API. The Pluto Games team collaborated in an Agile environment, used Git & Waffle.io to manage development, tested with Mocha & Chai, continuously integrated with Travis CI, and continuously deployed to Heroku."
    }
]

export const subprojects = [
    {
        name: 'rock paper scissors',
        subtitle: 'WEB BROWSER GAME',
        imageurl: 'https://i.imgur.com/34oDxJ2.jpg',
        url: 'https://beiatrix.github.io/code-sketches/pages/13-rps/rps.html',
        desc: 'Simple rock paper scissors game built with vanilla JavaScript.'
    },
    {
        name: 'game of life',
        subtitle: 'CELLULAR AUTOMATON',
        imageurl: 'https://i.imgur.com/35pHRAZ.jpg',
        url: 'https://beiatrix.github.io/code-sketches/pages/20-gameoflife/index.html',
        desc: "An in-browser implementation of Conway's Game of Life, made with pure HTML+CSS+JS."
    },
    {
        name: 'css resume',
        subtitle: 'LAYOUT DESIGN',
        imageurl: 'https://i.imgur.com/wPdZ08z.png',
        url: 'https://beiatrix.github.io/code-sketches/pages/06-resume/resume.html',
        desc: 'A minimal resume design made with pure CSS and media queries - no frameworks here.'
}
]