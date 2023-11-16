import ArticleCard from "./ArticleCard";

const ArticlesWrapper = ({ articles }) => {
  return (
    <>
      <section className="blog section-container">
        <div className="articles_wrapper">
          <div className="articles">
            {articles.map((article, index) => {
              const date = new Date(article.published);
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "short" });

              return (
                <ArticleCard
                  article={article}
                  day={day}
                  month={month}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesWrapper;
