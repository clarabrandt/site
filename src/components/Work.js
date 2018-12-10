import React, { Component } from 'react';
import './Work.css'

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="work--title">WORK EXPERIENCE</div>
        <div className="work--line"></div>
        <div className="work--content">
          <div className="work--experience-1">
            <div className="work--date-1">
              <div>2012-2017</div>
              <div></div>
              <div>2015</div>
            </div>
            <div className='jobs'>
              <div className='job--title'>Interdisciplinary Laboratory of Environmental Conflicts, Brazil.</div>
              <div className='job--description'>Worked as <strong>researcher</strong> and <strong>consultant</strong> in environmental projects related to sustainability, environmental planning, impact assessment, waste management and life cycle assessment.</div>
              <div className='job--title'>Institute for Environment and Sustainability Assessment of the Joint Research Center of the European Commission, Italy.</div> 
              <div className='job--description'>Visiting Researcher. 4 months (during the PhD Exchange Program).</div>
            </div>
          </div>
          <div className="work--experience-2">
            <div className="work--date-2">
              <div>2014-2015</div>
              <div></div>
              <div>2012</div>
            </div>
            <div className='jobs'>
              <div className='job--title'>Mineral Technology Center and Samarco Mining S.A. Brazil.</div> 
              <div className='job--description'>Project Manager and Consultant for the  Life Cycle Assessment (LCA) of the Production of Iron Ore (Mining).</div>
              <div className='job--title'> Rio + 20 ONU Conference. </div>
              <div className='job--description'>Coordinator of sustainability volunteers. 4 months.</div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Work;