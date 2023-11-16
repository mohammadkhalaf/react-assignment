import womenImage from "../assets/Crito - Design and Images/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg";
import chatgptimg from "../assets/Crito - Design and Images/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg";
import books from "../assets/Crito - Design and Images/images/kobu-agency-ipARHaxETRk-unsplash.jpg";
import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import { Link } from "react-router-dom";
import Slider from "./Slider";
const articlesArray = [
  {
    day: "25",
    month: "Mar",
    category: "Business",
    img: womenImage,
    title: "How to use digitalization in the classroom",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!",
  },
  {
    day: "17",
    month: "Mar",
    category: "Business",
    img: chatgptimg,
    title: "How to implement chat gpt in your projects",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!",
  },
  {
    day: "13",
    month: "Mar",
    category: "Business",
    img: books,
    title: "The guide to support modern css design",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!",
  },
];

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
