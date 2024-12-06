import React from 'react';

function NameCard() {
  return (
    <div className="mt-10">
      <h1>Sanae Shiromoto</h1>
      <h4>Software Engineer</h4>
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
    </div>
  )
};

export default NameCard;