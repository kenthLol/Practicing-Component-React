import React from "react";
import "../Book.css"; // Importa estilos adicionales si es necesario

function Book(props) {
  const cardStyle = {
    width: "18rem",
  };

  const imageStyle = {
    width: "100%", // Ajusta el ancho de la imagen al 100% de la tarjeta
    height: "400px", // Fija la altura de la imagen
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={imageStyle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.author}</p>
        <p className="card-text">{props.year}</p>
        <a href="#" className="btn btn-primary">
          Ver
        </a>
      </div>
    </div>
  );
}

export default Book;
