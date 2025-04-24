import React from "react";
import "./About.less";
import foto from "./../../assets/img/Dimon.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__inner">
        <h1>About me</h1>
        <img src={foto} alt="dima" />
        <p className="about__text">
          Привет, меня зовут Дмитрий, и я начинающий front-end разработчик,
          который строит новую карьеру на том, что мне действительно нравится. В
          1,5 года я оттачивал свои навыки веб-разработчика, изучая, как
          создавать веб-приложения с использованием HTML, CSS, JavaScript,
          React, Node, базы данных в PostgreSQL и MongoDB, во время учебы на
          степень магистра в области образования в университете Левена.
          <br /> Мне нравится создавать веб-приложения, и в последнее время я
          работаю с JavaScript (ES6+), HTML и CSS, React, Node.js, PostgreSQL и
          MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;
