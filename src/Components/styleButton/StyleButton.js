import React from "react";
import "./StyleButton.css";
const StyleButton = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <button className="styledButton " onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default StyleButton;
