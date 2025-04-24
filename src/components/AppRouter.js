import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { ABOUT, HOME, PROJECTS, SKILLS } from "../utils/consts";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={SKILLS} element={<Skills />} />
      <Route path={PROJECTS} element={<Projects />} />
      <Route path="*" element={<Navigate to={HOME} />} />
    </Routes>
  );
};

export default AppRouter;
