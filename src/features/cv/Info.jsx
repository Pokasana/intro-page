import React from 'react';
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function Info() {
  return (
    <div>
      <h1>Sanae Shiromoto</h1>
      <p>Software Engineer</p>
      <p>Honolulu, Hawaii, United States</p>

      <a>
        <button className="i-carbon-email" />
      </a>
      <a>
        <button className="i-carbon-logo-linkedin" />
      </a>
      <a>
        <button className='i-carbon-logo-github' />
      </a>
      
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