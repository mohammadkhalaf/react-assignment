import { Link } from "react-router-dom";
const ArticleCard = ({article, day, month}) => {
    console.log(article);
  return <>
    <Link  to={`/articles/${article.id}`} class="article">
        <div class="img-container">
            <div class="article_date">
             <span>{day}</span>
             <span class="article_date-month">{month}</span>
            </div>
             <img src={article.imageUrl} alt={article.title}/>
        </div>
        <span class="article_category">{article.category}</span>
        <h5 class="article_title"> {article.title} </h5>
        <p class="article_text">{article.content} </p>
    </Link>
  </>
};

export default ArticleCard;
