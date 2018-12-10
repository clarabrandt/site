import React, { Component } from 'react'
import './Courses.css';

class Courses extends Component {
  render() {
    return (
      <div className="courses">
        <div className="courses--title">COURSES</div>
        <div className="courses--content">
          <div className="courses--line"></div>
            <div className='courses--topic'>HTML and CSS basics</div>
            <div className='courses--school'>Tree House</div>
            <div className='courses--topic'>The Complete JavaScript Course</div>
            <div className='courses--school'>Udemy</div>
            <div className='courses--topic'>JavaScript30, What The FlexBox? </div>
            <div className='courses--topic'>CSS Grid</div> 
            <div className='courses--school'>Wes Bos</div>
        </div>
      </div>
    )
  }
}
export default Courses;