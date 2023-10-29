import {useEffect, useState} from "react";
import axios from "axios";
import ArticlesWrapper from "../components/articleComponents/ArticlesWrapper";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
  <ArticlesWrapper articles={articles}/>
  <Newsletter/>
  <Footer/> 
  </>
};

export default Articles;
