import { Link } from "react-router-dom";
import bg from "../../assets/Crito - Design and Images/images/background-lines.svg";
const Header = () => {
  return (
    <>
      <section className="contact_header section-container">
        <div className="content section-container">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
          <h1>Let's Connect</h1>
        </div>
        <div className="line-container">
          <img src={bg} alt="wavy line background" />
        </div>
      </section>
    </>
  );
};
export default Header;
