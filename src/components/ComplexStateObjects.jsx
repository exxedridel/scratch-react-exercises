import React from "react";
import "../styles/ComplexStateObjects.css";
import PersonX from "../images/personx.png";
import Star from "./Star";

const ComplexStateObjects = () => {

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }
  //same expresion as above with the 'return {}'
  //   function toggleFavorite() {
  //     setContact((prevContact) => {
  //       return {
  //         ...prevContact,
  //         isFavorite: !prevContact.isFavorite,
  //       };
  //     });
  //   }

  return (
    <main className="main--card">
      <article className="card">
        <img src={PersonX} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default ComplexStateObjects;
