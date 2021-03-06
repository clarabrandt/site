import React, { Component } from 'react';
import './Studies.css';

class Studies extends Component {
  render() {
    return (
      <div className="studies">
        <div className="studies--title">STUDIES</div>
        <div className="studies--line"></div>
        <div className="studies--content">
          <div className="studies--date">2018 </div>
            <div className='studies--item'>
              <div className='studies--topic'>Codaisseur</div>
              <div className='studies--school'>Full stack web development course</div>
            </div>
          <div className="studies--date">2012 - 2017 </div>
            <div className='studies--item'>
              <div className='studies--topic'>PhD Environmental and Energy Planning</div>
              <div className='studies--school'>Federal University of Rio de Janeiro</div>
            </div>
          <div className="studies--date">2010 - 2012</div>
            <div className='studies--item'>
              <div className='studies--topic'>MSc Environmental and Energy Planning</div>
              <div className='studies--school'>Federal University of Rio de Janeiro</div>
            </div>
          <div className="studies--date">2005 - 2009</div>
            <div className='studies--item'>
              <div className='studies--topic'>Bachelor in Biology </div>
              <div className='studies--school'>Federal University of Rio de Janeiro</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Studies;