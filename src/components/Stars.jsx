import starIcon from "../assets/Crito - Design and Images/images/star.svg";

const Stars = () => {
  const starsArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
      <div className="customer_rating">
        {starsArray.map((star, index) => (
          <img key={index} src={starIcon} alt="start" />
        ))}

        {/* <img src="./assets/Crito - Design and Images/images/star.svg" alt="star icon"/>
                <img src="./assets/Crito - Design and Images/images/star.svg" alt="star icon"/>
                <img src="./assets/Crito - Design and Images/images/star.svg" alt="star icon"/>
                <img src="./assets/Crito - Design and Images/images/star.svg" alt="star icon"/>
                <img src="./assets/Crito - Design and Images/images/star.svg" alt="star icon"/> */}
      </div>
    </>
  );
};

export default Stars;
