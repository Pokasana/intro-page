import React from 'react';

function NameCard() {
  return (
    <div className="py-10">
      <h1>Sanae Shiromoto</h1>
      <h4>Software Engineer</h4>
      <p>Honolulu, Hawaii, United States</p>

      <a className="m-2" href="mailto:hubbub.cutlets_1y@icloud.com">
        <button className="i-carbon-email text-gray-4" />
      </a>
      <a className="m-2" href="https://www.linkedin.com/in/sanae-soma?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPa6UJoepRQWNiAF1DQxkqg%3D%3D" target="_blank">
        <button className="i-carbon-logo-linkedin text-gray-4" />
      </a>
      <a className="m-2" href="https://github.com/Pokasana" target="_blank">
        <button className='i-carbon-logo-github text-gray-4' />
      </a>
    </div>
  )
};

export default NameCard;