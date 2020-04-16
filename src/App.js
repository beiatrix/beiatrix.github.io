import React from 'react';
import { default as Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { About, Projects, SubProjects } from './components/Content'
import { Footer } from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Projects />
          <SubProjects />
        </main>
        <Footer />
    </div>
  );
}

export default App;
