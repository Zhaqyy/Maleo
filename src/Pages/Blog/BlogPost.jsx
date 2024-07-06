import { useParams, Link } from "react-router-dom";
import author from "/mal.svg";
import featuredimg from "/blog/blog5.webp";
import "../../Style/Blog.css";
import { blogData } from "./blogData";
import { BlogSwiper } from "../../Components/swiper";

const BlogPost = () => {
  const params = useParams();
  const id = params.id;
  const data = blogData.find((blog) => blog.id === parseInt(id));

  if (!data) {
    return <h1>Blog post not found</h1>; // Handle case when blog post is not found
  }

  return (
    <>
      <section className="blog-details-header">
        <div className="blogWrap">
          <div className="header-content">
            <div className="header-text">
              <h4 className="title">
                {data?.title || "10 CONSEILS POUR UN EMBALLAGE SÛR ET EFFICACE"}
              </h4>
              <div className="author-details">
                <img
                  src={data?.client || author}
                  className="author-image"
                  alt=""
                  loading="lazy"
                />
                <div className="author-info">
                  <h6 className="author-name">
                    {data?.author || "Jérémie Lambert"}
                  </h6>

                  <span className="date-info">
                    {data?.date || "May 25, 2024"} <p>6 min read</p>
                  </span>
                  <Link to="" className="follow-link">
                    🔗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details-content">
        <div className="blogWrap">
          <div className="content-wrapper">
            <div className="content-text">
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <img
                src={data?.image || featuredimg}
                className="content-image"
                alt=""
              />
              <p className="content-paragraph">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ab, atque voluptate consequatur deleniti id assumenda minus soluta ad non dicta adipisci sed aliquid molestiae hic possimus minima repellat. Ipsum.
              </p>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur mollitia similique illo laudantium neque magni aperiam, aspernatur voluptatem, veritatis ducimus iure corrupti doloremque minima assumenda unde consectetur ratione! Sunt debitis consectetur obcaecati perspiciatis pariatur rerum ratione, amet, voluptatem ducimus nulla numquam harum corporis reprehenderit vero magni, praesentium vitae quibusdam?
              </p>
              <div className="quote-section">
                <p className="quote">
                  “ Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sunt saepe necessitatibus sed. “
                </p>
                <p className="quote-author">- Maleo Emballage</p>
                <div className="quote-icon">
                  <i className="mdi mdi-format-quote-open"></i>
                </div>
              </div>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt a, recusandae, soluta quas esse, veritatis aspernatur ipsa dolores dolorum adipisci pariatur fuga ut illum doloremque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blogswiper">
        <h3>Tu pourrais <br />
aussi aimer</h3>
        <BlogSwiper/>
      </section>
    </>
  );
};

export default BlogPost;
