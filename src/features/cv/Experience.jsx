import React from 'react';

function Experience() {
  return (
    <div className="py-3 my-0">
      <h2>Experience</h2>

      <section className="py-2">
        <div className="flex justify-between w-full">
          <h3>Outlier<span className="m-5 font-semibold">Honolulu, HI</span></h3>
          <p>2024 - 2024</p>
        </div>
        <h4>AI Model Trainer</h4>
        <p className="m-1">
          I evaluated and improved the quality of AI-generated responses by providing feedback and making revisions. I worked with Large Language Models (LLMs) and multimodal prompts to enhance accuracy, mitigate harmful content, and ensure optimal performance.
        </p>
      </section>

      <section className="py-2">
        <div className="flex justify-between w-full">
          <h3>Rakuten Travel Hawaii, LCC<span className="m-5 font-semibold">Honolulu, HI</span></h3>
          <p>2019 - 2023</p>
        </div>
        <h4>Business Operation Assistant</h4>
        <p className="m-1">
          I debugged an automated data entry tool using VBA to improve accuracy and streamline operations. Collaborating with the sales quality team, I helped refine processes and reduce person-hours. I also systemized tasks, improving team efficiency and client satisfaction in reservation management.
        </p>
      </section>

      <section className="py-2">
        <h3>Coty Group HFC Prestige Japan G.K.<span className="m-5 font-semibold">Tokyo, Japan</span></h3>
        <div className="flex justify-between w-full">
          <h4>Sales Operation Assistant</h4>
          <p>2016 - 2018</p>
        </div>
        <p className="m-1">
          I managed marketing and educational tools, coordinating distribution for 100+ sales reps and multiple projects. I handled customer data using SAP and analyzed sales results to support KPIs. Additionally, I collaborated with IT, finance, and sales teams to organize outsourcing requirements for a new system.
        </p>

        <div className="flex mt-5 justify-between w-full">
          <h4>Shared Services Lead</h4>
          <p>2015 - 2016</p>
        </div>
        <p className="m-1">
          I led a team through a critical business transition, troubleshooting and resolving issues to ensure smooth operations. By improving team communication, I boosted collaboration and helped meet project milestones, driving overall success.
        </p>
      </section>
    </div>
  )
};

export default Experience;