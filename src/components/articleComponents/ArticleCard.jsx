import { Link } from "react-router-dom";
const ArticleCard = ({ article, day, month }) => {
  return (
    <>
      <Link to={`/articles/${article.id}`} className="article">
        <div className="img-container">
          <div className="article_date">
            <span>{day}</span>
            <span className="article_date-month">{month}</span>
          </div>
          <img src={article.imageUrl} alt={article.title} />
        </div>
        <span className="article_category">{article.category}</span>
        <h5 className="article_title"> {article.title} </h5>
        <p className="article_text">{article.content} </p>
      </Link>
    </>
  );
};

export default ArticleCard;
