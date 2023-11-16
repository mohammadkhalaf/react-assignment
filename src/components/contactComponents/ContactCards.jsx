import visitus from "../../assets/Crito - Design and Images/images/visitus.svg";
import emailUs from "../../assets/Crito - Design and Images/images/emailus.svg";
import callus from "../../assets/Crito - Design and Images/images/callus.svg";
const cards = [
  {
    img: visitus,
    title: "Visit us",
    cardInfo: ["Sveavägen 31", "111 34 STOCKHOLM"],
  },
  {
    img: callus,
    title: "Call us",
    cardInfo: ["+ 46 (8) 123 456 789", "+ 46 (8) 987 654 321"],
  },
  {
    img: emailUs,
    title: "Email us",
    cardInfo: ["info@crito.com<", "support@crito.com"],
  },
];

const ContactCards = () => {
  return (
    <>
      <section className="cards section-container">
        {cards.map((card) => {
          return (
            <div className="card">
              <div className="icon_container">
                <img src={card.img} alt={`${card.title} icon`} />
              </div>
              <div className="card_info">
                <p className="card_title">{card.title}</p>
                <div className="card_footer">
                  {card.cardInfo.map((info) => {
                    return <p>{info}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactCards;
