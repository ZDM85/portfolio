import React from "react";
import "./MyButton.less";

const MyButton = ({ children, onClick }) => {
  return <button className="myBtn" onClick={onClick}>{children}</button>;
};

export default MyButton;
