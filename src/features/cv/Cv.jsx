import React from 'react';
import NameCard from './NameCard.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function Info() {
  return (
    <div className="mx-auto w-full space-y-8 print:space-y-6">

      <NameCard />
      
      <Education />

      <Experience />

    </div>
  )
}

export default Info;