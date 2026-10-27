import generalContractorImage from "../assets/generalcontractor.jpg";
import designAndBuildImage from "../assets/designandbuild.jpg";

function ServiceCard() {
  const service = [
    {
      id: 1,
      name: "General Contractor",
      src: generalContractorImage,
      alt: "General Contractor",
      description:
        "Deliver your masterpiece design from the beginning of piling works until fully-functioning building",
    },
    {
      id: 2,
      name: "Design & Build",
      src: designAndBuildImage,
      alt: "Design And Build",
      description:
        "Meet our designer, we design your dream building by applying low maintenance, high durability, and efficient cost principle",
    },
  ];
  return (
    <div className="w-50 text-center mx-auto  md:grid md:grid-cols-2 md:w-3/5 md:gap-20 md:mb-20">
      {service.map((i) => (
        <div className="mt-12">
          <img
            key={i.id}
            src={i.src}
            alt={i.alt}
            className="w-30 mx-auto rounded-xl h-50 md:w-40 md:h-60 lg:w-50 lg:h-70"
          ></img>
          <p className="font-bold mt-2 text-lg md:mt-4 lg:mt-6">{i.name}</p>
          <p className="italic text-md text-justify">{i.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
