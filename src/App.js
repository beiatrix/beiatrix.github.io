import React, { Component } from 'react';
import {Navbar, Header, About, Projects, Footer} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
