import { Link } from "react-router-dom";
import arrow from "../../assets/Crito - Design and Images/images/arrow.svg";
import "./modal.scss";
import { useAppContext } from "../context/Context";
const lins = [
  {
    path: "/",
    page: "Home",
  },
  {
    path: "#",
    page: "Services",
  },
  {
    path: "/articles",
    page: "Articles",
  },
  {
    path: "/contact",
    page: "Contact",
  },
];
const Modal = () => {
  const { closeModal } = useAppContext();
  const closeModalHandler = () => {
    closeModal();
  };
  return (
    <>
      <div className="modal-overlay" onClick={closeModalHandler}></div>
      <div className="modal">
        <nav className="nav">
          <ul className="nav_list">
            {lins.map((link) => {
              return (
                <li key={link.page} onClick={closeModalHandler}>
                  <Link to={link.path}>{link.page}</Link>
                </li>
              );
            })}
            <button>
              Login
              <img src={arrow} alt="arrow icon" />
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Modal;
