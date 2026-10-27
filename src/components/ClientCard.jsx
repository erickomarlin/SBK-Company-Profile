function ClientCard() {
  const clientImage = [
    {
      id: 1,
      img: "/src/assets/riverpadel.jpeg",
      alt: "River Padel",
    },
    {
      id: 2,
      img: "/src/assets/jungletennis.webp",
      alt: "Jungle Tennis",
    },
    {
      id: 3,
      img: "/src/assets/ica.png",
      alt: "Integrated Children Academy",
    },
    {
      id: 4,
      img: "/src/assets/senres.png",
      alt: "Senayan Residence",
    },
    {
      id: 5,
      img: "/src/assets/baramulti.png",
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
