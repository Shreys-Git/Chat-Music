import React from "react";
import "../styles/stylesheets.css";
const Cover = ({ image, prompt }) => {
  return <img src={image} alt={prompt} className=".image" />;
};

export default Cover;
