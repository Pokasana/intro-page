import React from 'react';

function Education() {
  const educations = [
    {
      name:"Flatiron School",
      year:"2024",
      content:"Software Engineering Flex Course",
      skills:"JavaScript | Python | HTML | CSS | SQL | React | Flask | SQLite | SQLAlchemy"
    },
    {
      name:"Osaka University of Arts Junior Collage",
      year:"2006",
      content:"Visual Design Course",
      skills:"Premier Pro | Final Cut | Illustrator | Photoshop"
    }
  ];

  const educationCards = educations.map(record => (
    <section className="py-2" key={educations.indexOf(record)}>
      <div className="flex justify-between w-full">
        <h3>{record.name}</h3><p>{record.year}</p>
      </div>
      <h4>{record.content}</h4>
      <p className="m-1 text-sm">{record.skills}</p>
    </section>
  ));

  return (
    <div className="py-5">
      <h2>Education</h2>

      {educationCards}

    </div>
  );
};

export default Education;