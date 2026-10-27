import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div>
      <div className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center min-h-110 p-6 md:px-8 md:pt-12">
        <h1 className="text-5xl text-orange-900 font-bold text-center">
          Our Projects
        </h1>
        <ProjectCard />
      </div>
      <div className="bg-[url(/src/assets/background3.jpg)] w-full h-30 bg-center"></div>
    </div>
  );
}

export default Projects;
