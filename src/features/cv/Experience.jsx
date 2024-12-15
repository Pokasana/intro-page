import React from 'react';

function Experience() {
  return (
    <div className="py-3 my-0">
      <h2>Experience</h2>

      <section className="py-2">
        <div className="flex justify-between w-full">
          <h3>Rakuten Travel Hawaii, LCC<span className="m-5 font-semibold">Honolulu, HI</span></h3>
          <p>2019 - 2023</p>
        </div>
        <h4>Business Operation Assistant</h4>
        <aside className="m-1">
          In this position, I played a key role in debugging an automated data entry tool to improve accuracy and streamline operations, leveraging my skills in VBA. I collaborated closely with the sales quality management team to enhance productivity and refine sales activities. I also reviewed a new payment system and designed an operational flow that significantly reduced person-hours for both clients and the team. By monitoring booking records and communicating directly with clients, I ensured satisfaction while improving the efficiency of our reservation management. Additionally, I systemized team tasks by building workflows and introducing new processes that resulted in a notable increase in efficiency.
        </aside>
      </section>

      <section className="py-2">
        <h3>Coty Group HFC Prestige Japan G.K.<span className="m-5 font-semibold">Tokyo, Japan</span></h3>
        <div className="flex justify-between w-full">
          <h4>Sales Operation Assistant</h4>
          <p>2016 - 2018</p>
        </div>
        <aside className="m-1">
          In this role, I was responsible for monitoring and managing marketing and educational tools to ensure the smooth operation of sales processes. I planned and coordinated distribution schedules for tools that supported over 100 sales representatives and multiple ongoing projects. Additionally, I managed customer master data using SAP, demonstrating my proficiency with the system. I also analyzed and formatted sales result data, communicating insights to the sales department to help achieve KPIs. My role required close collaboration with IT, finance, and sales teams to organize the requirements for outsourcing a new system, improving overall efficiency and functionality.
        </aside>

        <div className="flex mt-5 justify-between w-full">
          <h4>Shared Services Lead</h4>
          <p>2015 - 2016</p>
        </div>
        <aside className="m-1">
          As a team leader, I excelled in troubleshooting and resolving issues during a critical business transition, ensuring smooth operations throughout the process. I focused on enhancing team communication, which ultimately led to improved collaboration and project success. By directing the team's efforts, I was able to streamline operations and ensure that key project milestones were met on time, driving overall success for the company.
        </aside>
      </section>
    </div>
  )
};

export default Experience;