import mapImage from "../../assets/Crito - Design and Images/images/map.png";

const MapSection = () => {
  return (
    <>
      <section className="map-section">
        <div className="img-container">
          <img src={mapImage} alt="map" />
        </div>
      </section>
    </>
  );
};

export default MapSection;
