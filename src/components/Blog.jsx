import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { articlesArray } from "../constants";

const Blog = () => {
  return (
    <>
      <section className="blog section-container">
        <div className="articles_wrapper">
          <div className="blog_header-wrapper">
            <p className="sub-header">Articles & News</p>
            <div className="blog_header">
              <h2>Get Every Single Article & News</h2>
              <button>
                Browse Articles <img src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
          <div className="articles">
            {articlesArray.map((article) => {
              return (
                <Link to="#" className="article" key={article.title}>
                  <div className="img-container">
                    <div className="article_date">
                      <span>{article.day}</span>
                      <span className="article_date-month">
                        {article.month}
                      </span>
                    </div>
                    <img src={article.img} alt={article.title} />
                  </div>
                  <span className="article_category">{article.category}</span>
                  <h5 className="article_title">{article.title}</h5>
                  <p className="article_text">{article.desc}</p>
                </Link>
              );
            })}
          </div>
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Blog;
