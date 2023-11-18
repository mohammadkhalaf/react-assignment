import Stars from "./Stars";
import { tesimonialArray } from "../constants.js";
const Testimonial = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials_wrapper">
          {tesimonialArray.map((testimonial) => {
            return (
              <div className="testimonial" key={testimonial.customerName}>
                <Stars />
                <p className="customer_review">{testimonial.review}</p>
                <div className="customer_info">
                  <img
                    src={testimonial.customerImg}
                    alt={testimonial.customerName}
                  />
                  <div className="customer_name_job">
                    <h5 className="customer_name">
                      {testimonial.customerName}
                    </h5>
                    <p className="customer_job">{testimonial.customerJob}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
