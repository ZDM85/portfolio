import React from "react";
import MyButton from "../UI/button/MyButton";
import Logo from "./../assets/img/logo.jpg";
import "./Navbar.less";
import { useNavigate } from "react-router-dom";
import { ABOUT, HOME, PROJECTS, SKILLS } from "../../utils/consts";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img width={70} height={70} src={Logo} alt="" />
      </div>
      <div className="navbar__btns">
        <MyButton onClick={() => navigate(HOME)}>Home</MyButton>
        <MyButton onClick={() => navigate(ABOUT)}>About</MyButton>
        <MyButton onClick={() => navigate(PROJECTS)}>Projects</MyButton>
        <MyButton onClick={() => navigate(SKILLS)}>Skills</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
