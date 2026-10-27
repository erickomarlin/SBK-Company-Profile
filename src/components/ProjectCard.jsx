import projectRiverPadel from "../assets/projectriverpadel.JPG";
import projectJungleTennis from "../assets/projectjungletennis.JPG";
import projectIca from "../assets/projectica.jpeg";
import projectBaramulti from "../assets/baramulti.png";
import projectSenres from "../assets/projectsenres.JPG";

function ProjectCard() {
  const projectList = [
    {
      id: 1,
      name: "River Padel",
      year: "2024-2025",
      img: projectRiverPadel,
    },
    {
      id: 2,
      name: "Jungle Tennis",
      year: "2023-2024",
      img: projectJungleTennis,
    },
    {
      id: 3,
      name: "Integrated Children Academy",
      year: "2024",
      img: projectIca,
    },
    {
      id: 4,
      name: "Baramulti",
      year: "2025-2026",
      img: projectBaramulti,
    },
    {
      id: 5,
      name: "Senayan Residence",
      year: "2018-2026",
      img: projectSenres,
    },
  ];

  return (
    <div className="w-100  mx-auto  md:grid md:grid-cols-2 md:gap-10 md:w-180 lg:w-230">
      {projectList.map((i) => (
        <div
          key={i.id}
          className="mt-20 bg-slate-900 rounded-xl pb-4  shadow-2xl"
        >
          <img
            src={i.img}
            alt={i.name}
            className="w-100 h-70 mx-auto rounded-xl lg:w-200 lg:h-80"
          />
          <div className="flex mt-4 text-white">
            <p className="font-bold text-lg px-4 text-left">{i.name}</p>
            <p
              className="text-sm italic ml-auto px-4 pt-2
            "
            >
              {i.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
