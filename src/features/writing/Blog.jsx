import React from 'react';

function Blog() {

  const blogPosts = [
    {
      title: "Variation of validations",
      url: "https://medium.com/@sanae.s.soma/variation-of-validations-9b9929757d10",
      date: "May 3, 2024",
      platform: "Medium"
    },
    {
      title: "Cookies are everywhere, what are they?",
      url: "https://medium.com/@sanae.s.soma/cookies-are-everywhere-what-are-they-are-a9f9ef3d3abe",
      date: "Mar 27, 2024",
      platform: "Medium"
    },
    {
      title: "Command Line Interface - CLI",
      url: "https://medium.com/@sanae.s.soma/command-line-interface-cli-2c4efcb5da56",
      date: "Jan 21, 2024",
      platform: "Medium"
    },
    {
      title: "useParams Hook - React Router",
      url: "https://medium.com/@sanae.s.soma/useparams-hook-react-router-7fab77d8bbd2",
      date: "Oct 15, 2023",
      platform: "Medium"
    },
    {
      title: "How to change font weight on hover",
      url: "https://medium.com/@sanae.s.soma/how-to-change-font-weight-on-hover-4f97e7f32a99",
      date: "Jun 12, 2023",
      platform: "Medium"
    }
  ];

  return (
    <div className="py-10">
      <h1>
        Technical Writing
      </h1>

      <div>
        <ul className="list-none ">
          {blogPosts.map(post => {
            return (
              <li className="py-3 whitespace-nowrap">
                <a 
                className="hover:font-semibold inline-block transform scale-x-100 hover:scale-x-110 transitoni-all"
                href={post.url} target="_blank">
                {post.title}</a>
                <br/>
                <small className="ml-2">Published on {post.date} / {post.platform}</small>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blog;