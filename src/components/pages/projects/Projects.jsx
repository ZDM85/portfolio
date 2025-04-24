import React from "react";
import "./Projects.less";
import shop from "./../../assets/img/online-shop.jpg";
import cloud from "./../../assets/img/mern-cloud.jpg";
import { MERN, SHOP } from "../../../utils/consts";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__inner">
        <h1 className="projects__title">My Projects</h1>
        <ul className="projects__list">
          <li className="projects__list-item">
            <div className="projects__image-box">
              <img width={200} height={200} src={shop} alt="shop" />
            </div>
            <div className="projects__info">
              <h1>Онлайн магазин</h1>
              <p>
                Я разработал онлайн магазин, по своему проекту и со своим
                функционалом. В целом над проектом можно ещё работать.
              </p>
              <h2>
                Применёные технологии: React, ReduxToolkit, PostreSQL, Express,
                Sequelize
              </h2>
              <a href={SHOP} className="projects__btn">
                GITHUB
              </a>
            </div>
          </li>
          <li className="projects__list-item">
            <div className="projects__image-box">
              <img width={200} height={200} src={cloud} alt="cloud" />
            </div>
            <div className="projects__info">
              <h1>Облачное хранилище</h1>
              <p>
                В этом проекте я попробовал реализовать облачное хранилище. Моей
                целью проекта было самообучение.
              </p>
              <h2>
                Применёные технологии: React, Redux, MongoDB, Express, Sequelize
              </h2>
              <a href={MERN} className="projects__btn">
                GITHUB
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
