import React from 'react';

function Blog() {
  return (
    <div className="py-10">
      <h1>
        Technical Writing
      </h1>

      <div>
        <ul className="list-none ">
          <li className="py-3">
            <a 
            className="hover:font-semibold"
            href="https://medium.com/@sanae.s.soma/variation-of-validations-9b9929757d10" target="_blank">
            Variation of validations</a>
            <br/>
            <small className="ml-2">Published on May 3, 2024 / 7 min read</small>
          </li>
          <li className="py-3">
            <a
            className="hover:font-semibold"
            href="https://medium.com/@sanae.s.soma/cookies-are-everywhere-what-are-they-are-a9f9ef3d3abe" target="_blank">
            Cookies are everywhere, what are they?</a>
            <br/>
            <small className="ml-2">Published on Mar 27, 2024 / 6 min read</small>
          </li>
          <li className="py-3">
            <a
            className="hover:font-semibold"
            href="https://medium.com/@sanae.s.soma/command-line-interface-cli-2c4efcb5da56" target="_blank">
            Command Line Interface - CLI</a>
            <br/>
            <small className="ml-2">Published on Jan 21, 2024 / 5 min read</small>
          </li>
          <li className="py-3">
            <a
            className="hover:font-semibold"
            href="https://medium.com/@sanae.s.soma/useparams-hook-react-router-7fab77d8bbd2" target="_blank">
            useParams Hook - React Router</a>
            <br/>
            <small className="ml-2">Published on Oct 15, 2023 / 4 min read</small>
          </li>
          <li className="py-3">
            <a
            className="hover:font-semibold"
            href="https://medium.com/@sanae.s.soma/how-to-change-font-weight-on-hover-4f97e7f32a99" target="_blank">
            How to change font weight on hover</a>
            <br/>
            <small className="ml-2">Published on Jun 12, 2023 / 4 min read</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;