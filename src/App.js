import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Courses from './components/Courses.js'
import Work from './components/Work.js'
import Studies from './components/Studies.js'
import Skills from './components/Skills.js'
import Objectives from './components/Objectives.js'
import Title from './components/Title.js'
import Subtitle from './components/Subtitle.js'
import Picture from './components/Picture.js'
import About from './components/About.js'
import Languages from './components/Languages.js'
import Interests from './components/Interests.js'


// import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
            <div className="App">
              <div className='grid'>
                <Title />
                <Subtitle />
                <Picture />
                <About />
                <Languages />
                <Interests />
                <Objectives />
                <Studies />
                <Courses />
                <Skills />
                <Work />
              </div>
            </div>
    );
  }
}

export default App;
