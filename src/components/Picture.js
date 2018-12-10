import React, { Component } from 'react';
import './Picture.css';
import me from '../images/me.JPG';

export default class Picture extends Component {
  render() {
    return (
      <div className="picture">
        <img src={me} className="picture--profile"  alt=''/>
      </div>
    )
  }
}
