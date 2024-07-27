import React from 'react';
import NameCard from './NameCard.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function Info() {
  return (
    <div>

      <NameCard />
      
      <div>
        <Education />
      </div>

      <div>
        <Experience />
      </div>

    </div>
  )
}

export default Info;