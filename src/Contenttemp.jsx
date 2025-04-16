import PropTypes from "prop-types";
import Button from "./Button.jsx";
import pikachuImage from "./assets/pikachu.jpeg"; // renamed for clarity
import { useState } from "react";

function Content(props) {
  const [color, setColor] = useState("#fef3c7"); // default soft yellow

  const handleHideImage = (e) => {
    e.target.style.display = "none";
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const powerType = props.Gender ? "Strength" : "Wisdom";
  const isCute = props.isgood ? "Yes 🥰" : "No 😐";

  return (
    <>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ marginBottom: "1rem" }}
      />

      <div
        className="card"
        style={{
          backgroundColor: color,
          border: "2px solid #e5e7eb",
          borderRadius: "1rem",
          padding: "1.5rem",
          width: "300px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <img
          onClick={handleHideImage}
          src={pikachuImage}
          alt="Pikachu"
          style={{
            width: "100%",
            borderRadius: "1rem",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
        />

        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
          {props.name}
        </h2>
        <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
          {props.para}
        </p>

        <div style={{ textAlign: "left", fontSize: "1rem" }}>
          <p><strong>Power:</strong> {props.age}</p>
          <p><strong>Power Type:</strong> {powerType}</p>
          <p><strong>Is Cute?</strong> {isCute}</p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button />
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  name: PropTypes.string,
  para: PropTypes.string,
  Gender: PropTypes.bool,
  isgood: PropTypes.bool,
  age: PropTypes.number,
};

Content.defaultProps = {
  name: "Give a name",
  para: "We don't know yet?",
  Gender: true,
  isgood: false,
  age: 0,
};

export default Content;
