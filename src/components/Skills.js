import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skills--title">SKILLS</div>
        <div className="skills--line"></div>
        <div className="skills--myskills">
          <div className='skills-topic'>HTML5</div>
          <div className='skills-topic'>CSS: <span className='skills--specifics '>flex-box, grid</span></div>
          <div className='skills-topic'>'JavaScript:' <span className='skills--specifics '>React, Redux</span></div>
          <div className='skills-topic'>Node JS</div>
          <div className='skills-topic'>Express</div>
          <div className='skills-topic'>LCA Softwares: <span className='skills--specifics '>SimaPro, Gabi</span></div>
        </div>
      </div>
    )
  }
}

export default Skills;