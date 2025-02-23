import React from 'react';

function NameCard() {
  const icons = [
    {
      url: "mailto:hubbub.cutlets_1y@icloud.com",
      img: "i-carbon-email text-gray-4"
    },
    {
      url: "https://www.linkedin.com/in/sanae-soma?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPa6UJoepRQWNiAF1DQxkqg%3D%3D",
      img: "i-carbon-logo-linkedin text-gray-4"
    },
    {
      url: "https://github.com/Pokasana",
      img: "i-carbon-logo-github text-gray-4"
    }
  ];

  const renderIcons = icons.map(icon => (
      <a className="m-2" key={icons.indexOf(icon)} href={icon.url} target="_blank">
        <button className={icon.img}/>
      </a>
    )
  );

  return (
    <div className="py-10">
      <h1>Sanae Shiromoto</h1>
      <h4>Software Engineer</h4>
      <p>Honolulu, Hawaii, United States</p>

      {renderIcons}

    </div>
  )
};

export default NameCard;