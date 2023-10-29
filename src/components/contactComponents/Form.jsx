import arrow from '../../assets/Crito - Design and Images/images/arrow.svg'

const Form = () => {
  return  <>
        <section class="form-container section-container">
        <h2>Leave us a message for any information</h2>
        <form class="section-container">
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
          <textarea placeholder="Your Message*"></textarea>
          <button class="form_btn">
            Send Message
            <img
              src={arrow}
              alt="arrow"
            />
          </button>
        </form>
      </section>
  
  </>
};

export default Form;
