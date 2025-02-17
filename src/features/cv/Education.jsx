import React from 'react';

function Education() {
  return (
    <div className="py-5">
      <h2>Education</h2>
      <section className="py-2">
        <div className="flex justify-between w-full">
          <h3>Flatiron School</h3><p>2024</p>
        </div>
        <h4>Software Engineering Flex Course</h4>
        <p className="m-1 text-sm">
          JavaScript | Python | HTML | CSS | SQL | React | Flask | SQLite | SQLAlchemy
        </p>
      </section>

      <section className="py-2">
        <div className="flex justify-between w-full">
          <h3>Osaka University of Arts Junior Collage</h3><p>2006</p>
        </div>
        <h4>Visual Design Course</h4>
        <p className="m-1 text-sm">
         Premier Pro | Final Cut | Illustrator | Photoshop
        </p>
      </section>

    </div>
  )
}

export default Education;