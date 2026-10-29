import projectRiverPadel from "../assets/projectriverpadel.JPG";
import projectJungleTennis from "../assets/projectjungletennis.JPG";
import projectIca from "../assets/projectica.jpeg";
import projectBaramulti from "../assets/baramulti.png";
import projectSenres from "../assets/projectsenres.JPG";
import { useEffect, useState } from "react";

function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const projectList = [
    {
      id: 1,
      name: "River Padel",
      year: "2024-2025",
      coverImg: projectRiverPadel,
      img1: projectRiverPadel,
      img2: projectRiverPadel,
      img3: projectRiverPadel,
    },
    {
      id: 2,
      name: "Jungle Tennis",
      year: "2023-2024",
      coverImg: projectJungleTennis,
      img1: projectJungleTennis,
      img2: projectJungleTennis,
      img3: projectJungleTennis,
    },
    {
      id: 3,
      name: "Integrated Children Academy",
      year: "2024",
      coverImg: projectIca,
      img1: projectIca,
      img2: projectIca,
      img3: projectIca,
    },
    {
      id: 4,
      name: "Baramulti",
      year: "2025-2026",
      coverImg: projectBaramulti,
      img1: projectBaramulti,
      img2: projectBaramulti,
      img3: projectBaramulti,
    },
    {
      id: 5,
      name: "Senayan Residence",
      year: "2018-2026",
      coverImg: projectSenres,
      img1: projectSenres,
      img2: projectSenres,
      img3: projectSenres,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="w-100  mx-auto pb-10 md:grid md:grid-cols-2 md:gap-10 md:w-180 lg:w-230  ">
      {projectList.map((i) => (
        <div
          key={i.id}
          className="mt-20  bg-main rounded-lg pb-4  shadow-2xl transition-all hover:scale-105 active:scale-100 hover:cursor-pointer"
          onClick={() => openModal(i)}
        >
          <img
            src={i.coverImg}
            alt={i.name}
            className="w-100 h-70 mx-auto rounded-t-lg lg:w-200 lg:h-80"
          />
          <div className="flex mt-4 text-white">
            <p className="font-semibold text-lg px-4 text-left">{i.name}</p>
            <p
              className="text-sm italic ml-auto px-4 pt-2
            "
            >
              {i.year}
            </p>
          </div>
        </div>
      ))}

      {/* conditional modal render */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-2xl w-full bg-white rounded-lg p-6 text-white shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-accent transition-all hover:text-black hover:scale-105 active:scale-100 text-xl font-bold"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-2 text-accent">
              {selectedProject.name}
            </h2>
            <p className="text-sm italic text-gray-400 mb-4">
              {selectedProject.year}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <img
                src={selectedProject.img1}
                alt={selectedProject.name}
                className="projectImages"
              />
              <img
                src={selectedProject.img2}
                alt={selectedProject.name}
                className="projectImages"
              />
              <img
                src={selectedProject.img3}
                alt={selectedProject.name}
                className="projectImages"
              />
              <img
                src={selectedProject.img3}
                alt={selectedProject.name}
                className="projectImages"
              />
              <img
                src={selectedProject.img3}
                alt={selectedProject.name}
                className="projectImages"
              />
              <img
                src={selectedProject.img3}
                alt={selectedProject.name}
                className="projectImages"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
