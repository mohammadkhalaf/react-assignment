import arrow from "../assets/Crito - Design and Images/images/arrow.svg";
import lines from "../assets/Crito - Design and Images/images/background-wavy-lines.svg";

const Newsletter = () => {
  return (
    <>
      <section className="newsletters">
        <div className="section-container">
          <h2>Get news updates by signup</h2>
          <form>
            <input type="email" placeholder="username@domain.com" required />
            <button>
              Subscribe <img src={arrow} alt="arrow icon" />
            </button>
          </form>
          <div className="wavy_line">
            <img src={lines} alt="wavy lines" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
