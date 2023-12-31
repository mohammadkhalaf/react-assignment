import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { FiSearch } from "react-icons/fi";
import Loader from "../components/Loader";
const recentArticles = [
  {
    title: "How to Blow Through Capital At an Incredible Rate",
    published: "Jan 14, 2020",
  },
  {
    title: "Design Studios That everyone should know about",
    published: "Jan 14, 2020",
  },
  {
    title: "How did we get 1m+ visitors in 30 days without anything",
    published: "Jan 14, 2020",
  },
  {
    title: "Figma on figma:How we built our website design system",
    published: "Jan 14, 2020",
  },
];
const categories = [
  { title: "Technology", numOfPosts: "20 posts" },
  { title: "Freelancing", numOfPosts: "7 posts" },
  { title: "Writing", numOfPosts: "16 posts" },
  { title: "Marketing", numOfPosts: "11 posts" },
  { title: "Business", numOfPosts: "35 posts" },
  { title: "Education", numOfPosts: "14 posts" },
];

const Article = () => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);
  const date = new Date(article?.published);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const { id } = useParams();
  console.log(article);

  useEffect(() => {
    const getArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://win23-assignment.azurewebsites.net/api/articles/${id}`
        );
        const { data } = response;
        if (response.status === 200) {
          setArticle(data);
        }
      } catch (error) {}
      setLoading(false);
    };
    getArticle();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="section-container ">
        {article && (
          <>
            <div className="article-container">
              <div className="article-left">
                <h1>{article.title}</h1>
                <p className="subtitle">
                  {month} {day}, {year} <span></span> {article.category}
                  <span></span> {article.author}
                </p>
                <div>
                  <div className="img-container" style={{ maxWidth: "750px" }}>
                    <img
                      style={{ width: "100%" }}
                      src={article.imageUrl}
                      alt=""
                    />
                  </div>
                  <p className="article-content">{article.content}</p>
                  <p className="article-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint iste eligendi beatae accusamus recusandae nesciunt
                    veritatis nostrum ipsum aperiam! Vitae numquam obcaecati
                    illum magnam voluptatem quo unde recusandae odio, animi
                    aspernatur repellat nulla, ab expedita rerum maiores iusto
                    nemo assumenda vero. Ullam incidunt iusto, deleniti quidem
                    blanditiis inventore qui quam tempore velit nostrum! Ut
                    doloremque modi, odit temporibus fugit dolorem officiis!
                    Voluptatum eius cumque sint laboriosam, sed amet quos
                    laudantium enim quibusdam debitis dignissimos nulla magnam!
                    Eum laboriosam ullam pariatur in et ipsa distinctio odio,
                    nulla hic. Nostrum ullam ad nemo consequatur laboriosam quas
                    eos porro sequi. Repellat, impedit eaque?
                  </p>

                  <p className="article-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint iste eligendi beatae accusamus recusandae nesciunt
                    veritatis nostrum ipsum aperiam! Vitae numquam obcaecati
                    illum magnam voluptatem quo unde recusandae odio, animi
                    aspernatur repellat nulla, ab expedita rerum maiores iusto
                    nemo assumenda vero. Ullam incidunt iusto, deleniti quidem
                    blanditiis inventore qui quam tempore velit nostrum! Ut
                    doloremque modi, odit temporibus fugit dolorem officiis!
                    Voluptatum eius cumque sint laboriosam, sed amet quos
                    laudantium enim quibusdam debitis dignissimos nulla magnam!
                    Eum laboriosam ullam pariatur in et ipsa distinctio odio,
                    nulla hic. Nostrum ullam ad nemo consequatur laboriosam quas
                    eos porro sequi. Repellat, impedit eaque?
                  </p>
                </div>
              </div>
              <div className="article-right">
                <div className="search-input">
                  <input type="text" placeholder="Type to search..." />
                  <FiSearch className="search-icon" />
                </div>
                <div className="recent-articles">
                  <h3>Recent Posts</h3>
                  <ul>
                    {recentArticles.map((article) => {
                      return (
                        <li
                          className="recent-articles-item"
                          key={article.title}
                        >
                          {article.title} <span>{article.published}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="categories">
                  <h3>Categories</h3>
                  <ul>
                    {categories.map((category) => {
                      return (
                        <li className="category-item" key={category.title}>
                          {category.title} - <span>{category.numOfPosts}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <Blog />
      <Footer />
    </>
  );
};

export default Article;
