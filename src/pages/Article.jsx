import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticlesWrapper from '../components/articleComponents/ArticlesWrapper';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Article = () => {
    const [article,setArticle]=useState()
    const [loading,setLoading]=useState(false)
    const date= new Date(article?.published)
    const day = date.getDate(); 
    const year= date.getFullYear()
    const month = date.toLocaleString('default', { month: 'short' });
    const {id}= useParams()
    console.log(id);
    useEffect(()=>{
        const getArticle=async()=>{
            try {
                setLoading(true)
                const response =await axios.get(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
                const {data}=response
                if(response.status===200){
                    setArticle(data)
                }
               
                
            } catch (error) {
                
            }
             setLoading(false)

        }
        getArticle()

    },[])
    console.log(article);
    if(loading){
        return <h1>loading...</h1>
    }
 
  return <>
           {article && <>
             <h1>{article.title}</h1>
                <p>{month} {day}, {year} * {article.category} * {article.author}</p> 
                <div>
                    <div className='article-content'>
                <div className="img-container" style={{maxWidth:'750px'}}>
                    <img style={{width:'100%'}} src={article.imageUrl} alt="" />
                </div>
                <p>{article.content}</p>
            </div>
            <div></div>
        </div>
           </> }
           <Blog/>
           <Footer/>
        </>
};

export default Article;
