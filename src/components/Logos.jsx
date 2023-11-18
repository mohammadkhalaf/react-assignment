import { logos } from "../constants";

const Logos = () => {
  return (
    <>
      <div className="logos section-container">
        {logos.map((logo) => {
          return <img src={logo.src} alt={logo.alt} key={logo.alt} />;
        })}
      </div>
    </>
  );
};

export default Logos;
