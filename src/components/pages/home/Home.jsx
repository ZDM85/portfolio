import React from "react";
import "./Home.less";

const Home = () => {
  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__title">
          <h1 className="home__header">Hi, my name is</h1>
          <h1 className="home__name">Dmitry Zabanov</h1>
        </div>
        <h2 className="home__junior">I am junior front-end developer</h2>
      </div>
    </div>
  );
};

export default Home;
