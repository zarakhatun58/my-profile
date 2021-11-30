import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const blogsData = [
    {
      title: "All  About javaScript",
    },
    {
      title: " React.js ",
    },
    {
      title: " Es6 Features And Node.js",
    },
  ];
  return (
    <div>
      <div>
        <div className="text-center mt-4 mb-5">
          <h2 className="blogs-section">My Latest Blog Coming Soon</h2>
        </div>
        <div className="w-75 row d-flex justify-content-center m-auto text-center">
          {blogsData.map((pd) => (
            <div className="col-md-6 col-lg-4 col-sm-12 w-100 m-auto text-center">
              <div className="card-main">
                <div className="blog-image">
                  <img src={pd.blogImage} alt="" />
                </div>
                <div className="blog-details mt-3">
                  <h5 className="blog-title">{pd.title}</h5>
                  <p className="mt-3">
                    <small>{pd.blogInfo}</small>
                  </p>

                  <div className="text-center">
                    <button className="btn btn-secondary mt-1 mb-3 ">
                      <a target="blank" href={pd.link}>
                        Read more
                      </a>
                    </button>
                  </div>
                </div>
                <div className="card-bottom  row w-100 m-auto">
                  <div className="card-reaction1 card-reaction pl-4">
                    <h3>2</h3>
                    <p>READ</p>
                  </div>
                  <div className="card-reaction2 card-reaction pl-2">
                    <h3>23</h3>
                    <p>VIEWS</p>
                  </div>
                  <div className="card-reaction3 card-reaction pl-2">
                    <h3>2</h3>
                    <p>COMMENTS</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center more-blogs ">
          <Link to="/blog">
            <button className="btn btn-danger">More Blog's</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
