import ArticleCard from "./ArticleCard";

const ArticlesWrapper = ({articles}) => {
  return <>
     <section class="blog section-container">
        <div class="articles_wrapper">
       
          <div class="articles">
            {articles.map((article)=>{
                const date= new Date(article.published)
                const day = date.getDate(); 
              const month = date.toLocaleString('default', { month: 'short' });
         
              return   <>
              <ArticleCard article={article} day={day} month={month}/>
              
              </>
            })}
         
          </div>
        </div>
      </section>
  </>
};

export default ArticlesWrapper;
