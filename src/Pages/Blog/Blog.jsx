// import React from "react";
import { Link } from "react-router-dom";
import '../../Style/Blog.css'
import { blogData } from "./blogData";

const Blog = () => {
  return (
    <section className="blog-section">
        <h1 className="hollow bloghead">BLOG</h1>
      <div className="blogWrap">
        <div className="blog-grid">
          {blogData.map((item, index) => (
            <div className="blog-card" key={index}>
              <img src={item.image} className="blog-image" alt="" />
              <div className="blog-content">
               
                <div className="blog-title">
                  <Link to={`/blog-detail/${item.id}`} className="title-link">
                    {item.title}
                  </Link>
                </div>
                <div className="blog-excerpt">
                  <p className="excerpt">
                    {item.excerpt}
                  </p>
                </div>
                <div className="blog-footer">
             
                <span className="publish-date">
                    {/* <FiCalendar className="icon" /> */}
                    <p className="text">{item.date}</p>
                  </span>
                  {/* <span className="author-info"> */}
                    <Link to={`/blog-detail/${item.id}`} className="text more">
                     Read More
                    </Link>
                  {/* </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination-list">
              <li>
                <Link to="#" className="pagination-item chevleft">
                ≫
                </Link>
              </li>
              <li>
                <Link to="#" className="pagination-item">
                  1
                </Link>
              </li>
              <li>
                <Link to="#" className="pagination-item">
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-current="page"
                  className="pagination-item active"
                >
                  3
                </Link>
              </li>
              <li>
                <Link to="#" className="pagination-item">
                  4
                </Link>
              </li>
              <li>
                <Link to="#" className="pagination-item">
                  5
                </Link>
              </li>
              <li>
                <Link to="#" className="pagination-item">
                ≫
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Blog;
