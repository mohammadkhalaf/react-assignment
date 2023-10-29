import paperz from '../../assets/Crito - Design and Images/images/paperz.svg'
import dorfux from '../../assets/Crito - Design and Images/images/dorfus.svg'
import martino from '../../assets/Crito - Design and Images/images/martino.svg'
import square from '../../assets/Crito - Design and Images/images/square.svg'
import gobona from '../../assets/Crito - Design and Images/images/gobona.svg'
import './logos.scss'

const Logos = () => {
  return <>
   <div className="logos section-container">
          <img
            src={paperz}
            alt="paperz logo"
          />
          <img
            src={dorfux}
            alt=" dorfus logo"
          />
          <img
            src={martino}
            alt="martino logo"
          />
          <img
            src={square}
            alt="square logo"
          />
          <img
            src={gobona}
            alt="gobona logo"
          />
        </div>
  </>
};

export default Logos;
