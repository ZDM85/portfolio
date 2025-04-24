import React from "react";
import "./Skills.less";
import css from "./../../assets/img/logo_list/css.svg";
import js from "./../../assets/img/logo_list/js.svg";
import node from "./../../assets/img/logo_list/nodejs.svg";
import react from "./../../assets/img/logo_list/react.svg";
import typescript from "./../../assets/img/logo_list/typescript.svg";
import html from "./../../assets/img/logo_list/html.svg";
import redux from "./../../assets/img/logo_list/redux.svg";
import express from "./../../assets/img/logo_list/expressjs.svg";

const Skills = () => {
  const images = [
    { img: css, name: "css" },
    { img: react, name: "react" },
    { img: html, name: "html" },
    { img: express, name: "express" },
    { img: redux, name: "redux" },
    { img: node, name: "node" },
    { img: js, name: "js" },
    { img: typescript, name: "typescript" },
  ];

  return (
    <div className="skills">
      <div className="skills__inner">
        <h1 className="skills__title">My skills</h1>
        <ul className="skills__list">
          {images.map((obj, index) => (
            <li key={index} className="skills__list-item">
              <img width={100} height={100} src={obj.img} alt={obj} />
              <h3>{obj.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
