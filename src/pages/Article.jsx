import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticlesWrapper from '../components/articleComponents/ArticlesWrapper';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import {FiSearch} from 'react-icons/fi'
const recentArticles=[
    {title:'How to Blow Through Capital At an Incredible Rate', published:'Jan 14, 2020'},
    {title:'Design Studios That everyone should know about', published:'Jan 14, 2020'},
    {title:'How did we get 1m+ visitors in 30 days without anything', published:'Jan 14, 2020'},
    {title:'Figma on figma:How we built our website design system', published:'Jan 14, 2020'}
]
const categories=[
    {title:'Technology', numOfPosts:'20 posts'},  {title:'Freelancing', numOfPosts:'7 posts'},  {title:'Writing', numOfPosts:'16 posts'},  {title:'Marketing', numOfPosts:'11 posts'},  {title:'Business', numOfPosts:'35 posts'},  {title:'Education', numOfPosts:'14 posts'}
]

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
           <section className='section-container article-container'>
           {article && <>
             <div className='article-right'>
             <h1>{article.title}</h1>
             <p>{month} {day}, {year} * {article.category} * {article.author}</p> 
              <div>
                  
              <div className="img-container" style={{maxWidth:'750px'}}>
                    <img style={{width:'100%'}} src={article.imageUrl} alt="" />
                </div>
                <p>{article.content}</p>
            </div>
             </div>
            <div className='article-left'>
                <div className='search-input'>
                <input type="text"  placeholder='Type to search'/>
                <FiSearch className='search-icon'/>
                </div>
                <div className="recent-articles">
                    <h3>Recent Posts</h3>
                    <ul>
                        {recentArticles.map((article)=>{
                            return <li> {article.title} <span>{article.published}</span></li>
                        })}
                    </ul>
                </div>
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        {categories.map((category)=>{
                            return <li> {category.title} <span>{category.numOfPosts}</span></li>
                        })}
                    </ul>
                </div>
            </div>
           </> }
           </section>
           <Blog/>
           <Footer/>
        </>
};

export default Article;
