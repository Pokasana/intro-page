import React from 'react';
import NameCard from './NameCard.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function Info() {
  return (
    <div className="mx-auto w-full print:space-y-1">

      <NameCard />
      
      <Education />

      <Experience />

    </div>
  )
}

export default Info;