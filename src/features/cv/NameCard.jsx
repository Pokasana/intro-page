import React from 'react';

function NameCard() {
  return (
    <div className="py-10">
      <h1>Sanae Shiromoto</h1>
      <h4>Software Engineer</h4>
      <p>Honolulu, Hawaii, United States</p>

      <a href="mailto:hubbub.cutlets_1y@icloud.com">
        <button className="i-carbon-email text-gray-4" />
      </a>
      <a href="linkedin.com/in/sanae-soma" target="_blank">
        <button className="i-carbon-logo-linkedin text-gray-4" />
      </a>
      <a href="https://github.com/Pokasana" target="_blank">
        <button className='i-carbon-logo-github text-gray-4' />
      </a>
    </div>
  )
};

export default NameCard;