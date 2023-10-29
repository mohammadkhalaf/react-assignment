import Stars from "./Stars";
import casandrawarren from '../assets/Crito - Design and Images/images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import amandatullig from "../assets/Crito - Design and Images/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
import jack from "../assets/Crito - Design and Images/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
const tesimonialArray =[
  {
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus necessitatibus perferendis culpa, autem magni  accusantium iste adipisci quae impedit, saepe temporibus dolorum mollitia.',
    customerName:'Cassandra Warren',
    customerJob:'Business Manager, Dorfus',
    customerImg:casandrawarren
  },
   {
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus necessitatibus perferendis culpa, autem magni  accusantium iste adipisci quae impedit, saepe temporibus dolorum mollitia.',
    customerName:'Amanda Tulling',
    customerJob:'Senior Developer, Square',
    customerImg:amandatullig

  },
   {
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus necessitatibus perferendis culpa, autem magni  accusantium iste adipisci quae impedit, saepe temporibus dolorum mollitia.',
    customerName:'Jack McDogglas',
    customerJob:'Key Account Manager, Gobona',
    customerImg:jack

  }

]

const Testimonial = () => {
  return <>
         <div class="testimonials">
          <div class="testimonials_wrapper">
               {
              tesimonialArray.map((testimonial)=>{
                return  <div class="testimonial">
                  
                        <Stars/>
                        <p class="customer_review">
                          {testimonial.review}
                        </p>
                        <div class="customer_info">
                          <img
                            src={testimonial.customerImg}
                            alt={testimonial.customerName}
                          />
                          <div class="customer_name_job">
                            <h5 class="customer_name">{testimonial.customerName}</h5>
                            <p class="customer_job">{testimonial.customerJob}</p>
                          </div>
                        </div>
            </div>
              })
            }

          </div>

         </div>
  
        </>
            

};

export default Testimonial;
