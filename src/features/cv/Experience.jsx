import React from 'react';

function Experience() {
  return (
    <div className="py-2 my-0">
      <h2>Experience</h2>

      <section className="py-2">
        <h3>Rakuten Travel Hawaii, LCC<span className="m-5 font-semibold">Honolulu, HI</span></h3>
        <div className="flex justify-between w-full">
          <h4>Business Operation Assistant</h4>
          <p>Nov 2019 - Oct 2023</p>
        </div>
      </section>

      <section className="py-2">
        <h3>Coty Group HFC Prestige Japan G.K.<span className="m-5 font-semibold">Tokyo, Japan</span></h3>
        <div className="flex justify-between w-full">
          <h4>Sales Operation Assistant</h4>
          <p>Feb 2016 - Dec 2018</p>
        </div>
        <aside className="m-1">Worked as an assistant for the sales management section. Managed marketing/sales-related tools, and distribution schedule.</aside>

        <div className="flex mt-5 justify-between w-full">
          <h4>Shared Services Lead</h4>
          <p>Sep 2015 - Feb 2016</p>
        </div>
        <aside className="m-1">Sales administrative tasks, such as managing leases, office facilities, and invoices.</aside>
      </section>
    </div>
  )
};

export default Experience;