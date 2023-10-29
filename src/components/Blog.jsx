import womenImage from "../assets/Crito - Design and Images/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg"
import chatgptimg from "../assets/Crito - Design and Images/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg"
import books from "../assets/Crito - Design and Images/images/kobu-agency-ipARHaxETRk-unsplash.jpg"
import arrow from '../assets/Crito - Design and Images/images/arrow.svg'
const articlesArray=[
  {
    day:'25',
    month:'Mar',
    category:'Business',
    img:womenImage,
    title:'How to use digitalization in the classroom',
    desc:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!'
  },
    {
    day:'17',
    month:'Mar',
    category:'Business',
    img:chatgptimg,
    title:'How to implement chat gpt in your projects',
    desc:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!'
  },
    {
    day:'13',
    month:'Mar',
    category:'Business',
    img:books,
    title:'The guide to support modern css design',
    desc:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem tempore fuga!'
  }

]

const Blog = () => {
  return <>
        <section class="blog section-container">
        <div class="articles_wrapper">
          <div class="blog_header-wrapper">
            <p class="sub-header">Articles & News</p>
            <div class="blog_header">
              <h2>Get Every Single Article & News</h2>
              <button>Browse Articles <img src={arrow} alt="arrow icon"/></button>
            </div>
          </div>
          <div class="articles">
            {articlesArray.map((article)=>{
              return   <a href="#" class="article">
                      <div class="img-container">
                        <div class="article_date">
                          <span>{article.day}</span>
                          <span class="article_date-month">{article.month}</span>
                        </div>
                        <img
                          src={article.img}
                          alt={article.title}
                        />
                      </div>
                      <span class="article_category">{article.category}</span>
                      <h5 class="article_title">
                        {article.title}
                      </h5>
                      <p class="article_text">
                        {article.desc}
                      </p>
                     </a>
            })}
         
          </div>
          <div class="image_slider">
            <div class="slider active"></div>
            <div class="slider"></div>
            <div class="slider"></div>
            <div class="slider"></div>
            <div class="slider"></div>
          </div>
        </div>
      </section>
  </>
};

export default Blog;
