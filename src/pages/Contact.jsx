import Form from "../components/contactComponents/Form";
import ContactCards from "../components/contactComponents/ContactCards";
import MapSection from "../components/contactComponents/MapSection";
import Footer from "../components/Footer";
import Header from "../components/contactComponents/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactCards />
      <Form />
      <MapSection />
      <Footer />
    </>
  );
};

export default Contact;
