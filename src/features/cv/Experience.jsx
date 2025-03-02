import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      organization: "Outlier",
      location: "Honolulu, HI",
      roles: [{title: "AI Model Trainer", year: "2024 - 2025", description: "I evaluated and improved the quality of AI-generated responses by providing feedback and making revisions. I worked with Large Language Models (LLMs) and multimodal prompts to enhance accuracy, mitigate harmful content, and ensure optimal performance."}]
    },
    {
      id: 2,
      organization: "Rakuten Travel Hawaii, LCC",
      location: "Honolulu, HI",
      roles: [{title: "Business Operation Assistant", year: "2019 - 2023", description: "I debugged an automated data entry tool using VBA to improve accuracy and streamline operations. Collaborating with the sales quality team, I helped refine processes and reduce person-hours. I also systemized tasks, improving team efficiency and client satisfaction in reservation management."}]
    },
    {
      id: 3,
      organization: "Coty Group HFC Prestige Japan G.K.",
      location: "Tokyo, Japan",
      roles: [
        {title: "Sales Operation Assistant", year: "2016 - 2018", description: "I managed marketing and educational tools, coordinating distribution for 100+ sales reps and multiple projects. I handled customer data using SAP and analyzed sales results to support KPIs. Additionally, I collaborated with IT, finance, and sales teams to organize outsourcing requirements for a new system."},
        {title: "Shared Services Lead", year: "2015 - 2016", description: "I led a team through a critical business transition, troubleshooting and resolving issues to ensure smooth operations. By improving team communication, I boosted collaboration and helped meet project milestones, driving overall success."}
      ]
    }
  ];

  const loadExperiences = experiences.map(experience => {
    const {organization, location, roles, id} = experience;

    if (experience.roles.length > 1) {
      
      return (
        <section key={id} className="py-2">
          <h3>{organization}<span className="m-5 font-semibold">{location}</span></h3>
                    
          {roles.map(role => {
            const {title, year, description} = role;
            const roleId = `${title}-${year}`

            return (
              <div key={roleId}>
                <div className="flex mt-5 justify-between w-full">
                  <h4>{title}</h4>
                  <p>{year}</p>
                </div>
                <p className="m-1">{description}</p>              
              </ div>
            )
          })}

        </section>
      );

    } else {
      const {title, year, description} =  experience.roles[0];

      return (
        <section key={id} className="py-2">
          <div className="flex justify-between w-full">
            <h3>{organization}<span className="m-5 font-semibold">{location}</span></h3>
            <p>{year}</p>
          </div>
          <h4>{title}</h4>
          <p className="m-1">{description}</p>
        </section>
      )
    }
  });

  return (
    <div className="py-3 my-0">
      <h2>Experience</h2>

      {loadExperiences}

    </div>
  )
};

export default Experience;