import React, { useEffect, useState } from "react";
import arrow from "../../assets/Crito - Design and Images/images/arrow.svg";
import axios from "axios";

const Form = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!values.name.trim()) {
        setNameError("Please enter a valid name.");
      } else {
        setNameError("");
      }

      if (!values.email.trim() || !values.email.includes("@")) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }

      if (values.message.trim().length < 10) {
        setMessageError("Please enter a message with at least ten characters.");
      } else {
        setMessageError("");
      }

      if (values.name && values.email && values.message) {
        const response = await axios.post(
          "https://win23-assignment.azurewebsites.net/api/contactform",
          { ...values }
        );
        const data = response.data;
        setSuccessMsg(data);
        setValues({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg("");
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [successMsg]);

  return (
    <>
      <section className="form-container section-container">
        <h2>Leave us a message for any information</h2>
        <p className="success">{successMsg && successMsg}</p>
        <form className="section-container" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name*"
            value={values.name}
            name="name"
            onChange={changeHandler}
          />
          {nameError && <p className="error-message">{nameError}</p>}

          <input
            type="email"
            placeholder="Email*"
            value={values.email}
            name="email"
            onChange={changeHandler}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <textarea
            placeholder="Your Message*"
            value={values.message}
            name="message"
            onChange={changeHandler}
          />
          {messageError && <p className="error-message">{messageError}</p>}

          <button className="form_btn">
            Send Message
            <img src={arrow} alt="arrow" />
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
