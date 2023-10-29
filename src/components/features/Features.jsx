 import businessadvice from '../../assets/Crito - Design and Images/images/financialadvice.svg'
import startup from '../../assets/Crito - Design and Images/images/startup.svg'
import financialadvice from '../../assets/Crito - Design and Images/images/financialadvice.svg'
import riskmanagement from '../../assets/Crito - Design and Images/images/riskmanagment.svg'
import arrow from '../../assets/Crito - Design and Images/images/arrow.svg'

 const  featuresArray=[
    {
    title:'Business Advice',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, veritatis.',
    img:businessadvice
     },
       {
    title:'Startup business',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, veritatis.',
    img:startup
     },
    {
    title:'Financial Advice',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, veritatis.',
    img:financialadvice
     },
       {
    title:'Risk Management',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, veritatis.',
    img:riskmanagement
     }
]



const Features = () => {
  return <>
     <section className="features">
        <div className="features_wrapper section-container">
          <div className="features_content">
            <p className="sub-header">Features</p>
            <h2>Our Accounting is trusted by thousands of companies</h2>
            <button>
              Learn More
              <img
                src={arrow}
                alt="arrow icon"
              />
            </button>
          </div>
          <div className="features_container">
             {featuresArray.map((feature)=>{
              console.log(feature.img);
              return <>
              <div className="single_feature">
              <img
                src={feature.img}
                alt={feature.title}
              />
              <h4>{feature.title}</h4>
              <p>
              {feature.desc}
              </p>
            </div>
              </>
            })} 
          </div>
        </div>
      </section>
  </>
};

export default Features;
