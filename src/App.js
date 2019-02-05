import React, { Component } from 'react';
import {Navbar, Header, About, Projects, Footer} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* ================================================== */}
        {/* <div className="App-header">
          <h1>UNDER CONSTRUCTION :)</h1>
        </div> */}
        {/* ================================================== */}
        <Navbar />
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Projects />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
