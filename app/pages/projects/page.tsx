"use client";

import ResponsivePageSwap from "@/utils/ResponsivePage";
import ProjectsDesktop from "./pages/projectsDestop";
import ProjectsIpad from "./pages/projectsPad";
import ProjectsMobile from "./pages/projectsMobile";
import useFetchInitialData from "@/hooks/useFetchInitialData";

const Projects = () => {
  useFetchInitialData();
  return (
    <ResponsivePageSwap
      type="projects"
      mobile={<ProjectsMobile />}
      desktop={<ProjectsDesktop />}
      pad={<ProjectsIpad />}
    />
  );
};

export default Projects;
