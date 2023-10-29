import {useEffect, useState} from "react";
import axios from "axios";

const Articles = () => {
    const[articles,setArticles]=useState([])

    useEffect(()=>{
        const getArticles=async()=>{
            try {
                
                const response= await axios.get('https://win23-assignment.azurewebsites.net/api/articles')
                const {data}=  response
                console.log(data);
              
                 if(response.status===200){
                  setArticles(data)
                 }
            } catch (error) {
                console.log(error);
                
            }

        }
        getArticles()

    },[])
  return  <>
    <section class="blog section-container">
        <div class="articles_wrapper">
       
          <div class="articles">
            {articles.map((article)=>{
                const date= new Date(article.published)
                const day = date.getDate(); 
              const month = date.toLocaleString('default', { month: 'short' });
         
              return   <a href="#" class="article">
                      <div class="img-container">
                        <div class="article_date">
                          <span>{day}</span>
                          <span class="article_date-month">{month}</span>
                        </div>
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                        />
                      </div>
                      <span class="article_category">{article.category}</span>
                      <h5 class="article_title">
                        {article.title}
                      </h5>
                      <p class="article_text">
                        {article.content}
                      </p>
                     </a>
            })}
         
          </div>
        </div>
      </section>
  
  </>
};

export default Articles;
