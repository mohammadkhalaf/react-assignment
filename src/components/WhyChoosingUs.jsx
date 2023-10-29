import process from '../assets/Crito - Design and Images/images/process.svg'
import strategicplanning from '../assets/Crito - Design and Images/images/strategicplaning.svg'
import experience from '../assets/Crito - Design and Images/images/experience.svg'
import ai from '../assets/Crito - Design and Images/images/AI.svg'
import twowomen from '../assets/Crito - Design and Images/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const chooseUp=[
  {
    title:'Process Excellen',
    img:process,
    desc:'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    title:'Strategic Planning',
    img:strategicplanning,
     desc:'Lorem ipsum dolor sit amet consectetur.'
   },
   {
    title:'Experience Design',
    img:experience,
     desc:'Lorem ipsum dolor sit amet consectetur.'

   },
   {
    title:'Artificial Intelligence',
    img:ai,
    desc:'Lorem ipsum dolor sit amet consectetur.'
   }

]

const WhyChoosingUs = () => {
  return <>
      <section class="why_choose-us section-container">
            <div class="content">
              <p class="title">Why Choose Us</p>
              <h2>Why We Are The Best Business Consulting Agency</h2>
              <div class="benefits_list">
                <ul>
                  {
                    chooseUp.map((item)=>{
                      return <li>
                    <div class="img_wrapper">
                      <img
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div class="list_detail">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </li>

                    })
                  }
                </ul>
              </div>
            </div>
            <div class="image_container">
               <img
                src={twowomen}
                alt="two women talking together"
              /> 
              <div class="bg"></div>
          </div>
      
      </section>
  </>
};

export default WhyChoosingUs;
