import React, { Component } from 'react'
import './Interests.css'

export default class Interests extends Component {
  render() {
    return (
      <div className="interests">
        <div className='interests--title'>INTERESTS</div>
        <div className="interests--line"></div>
        <div className="interests--icons">
          <div className="interests--row-icons">
            <svg className="interests--lnr lnr-laptop"><use xlinkHref="#lnr-laptop"></use></svg>
            <svg className="interests--lnr lnr-code"><use xlinkHref="#lnr-code"></use></svg>
            <svg className="interests--lnr lnr-book"><use xlinkHref="#lnr-book"></use></svg>
            <svg className="interests--lnr lnr-earth"><use xlinkHref="#lnr-earth"></use></svg>
            <svg className="interests--lnr lnr-bicycle"><use xlinkHref="#lnr-bicycle"></use></svg>
            <svg className="interests--lnr lnr-dinner"><use xlinkHref="#lnr-dinner"></use></svg>
          </div>
        </div>
    </div> 
    )
  }
}
