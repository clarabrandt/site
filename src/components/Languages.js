import React, { Component } from 'react';
import './Languages.css'

export default class Languages extends Component {
  render() {
    return (
      <div className="languages">
        <div className='languages--title'>LANGUAGES</div>
        <div className="languages--line"></div>
          <ul>
            <li>
              <strong>Portuguese</strong> - native speaker
            </li>
            <li>
              <strong>English, Spanish</strong>- fluent
            </li>
            <li>
              <strong>Italian</strong>	 - advanced
            </li>
            <li>
              <strong>French, Dutch</strong> - basic communication skills
            </li>
          </ul>
      </div>
    )
  }
}
