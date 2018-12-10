import React, { Component } from 'react';
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className='about--title'> ABOUT </div>
        <div className="about--line"></div>
        <div className='about--info-local'>
          <svg className="about--lnr about--lnr-map-marker"><use xlinkHref="#lnr-map-marker"></use></svg>
          <p>Utrecht, Netherlands</p>
        </div>
        <div className='about--info-email'>
          <svg className="about--lnr about--lnr-envelope"><use xlinkHref="#lnr-envelope"></use></svg>
          <p> mariaclarabrandt@gmail.com</p>
        </div>
      </div>
    )
  }
}
