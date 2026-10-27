import riverPadelLogo from "../assets/riverpadel.jpeg";
import jungleTennisLogo from "../assets/jungletennis.webp";
import icaLogo from "../assets/ica.png";
import senresLogo from "../assets/senres.png";
import baramultiLogo from "../assets/baramulti.png";

function ClientCard() {
  const clientImage = [
    {
      id: 1,
      img: riverPadelLogo,
      alt: "River Padel",
    },
    {
      id: 2,
      img: jungleTennisLogo,
      alt: "Jungle Tennis",
    },
    {
      id: 3,
      img: icaLogo,
      alt: "Integrated Children Academy",
    },
    {
      id: 4,
      img: senresLogo,
      alt: "Senayan Residence",
    },
    {
      id: 5,
      img: baramultiLogo,
      alt: "Baramulti",
    },
  ];
  return (
    <div className="w-50 mx-auto md:grid md:grid-cols-2 md:gap-10 md:w-180 lg:w-230 lg:grid-cols-3">
      {clientImage.map((i) => (
        <div key={i.id} className="mt-20">
          <img
            src={i.img}
            alt={i.alt}
            className="w-50 h-50 mx-auto rounded-xl "
          />
        </div>
      ))}
    </div>
  );
}

export default ClientCard;
