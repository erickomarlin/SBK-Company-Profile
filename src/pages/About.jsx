import backgroundImg from "../assets/background3.jpg";

function About() {
  return (
    <div>
      <div className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center min-h-110 p-6">
        <h1 className="text-5xl text-orange-900 font-bold">What We Do</h1>
        <div className="bg-linear-to-br from-orange-700 to-gray-700 mt-20 border rounded-xl px-4 py-2">
          <h3 className="text-white text-xl font-bold mb-3">
            Design Your Dream Property
          </h3>
          <p className="text-gray-100 text-sm italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            sint?
          </p>
        </div>
        <div className="bg-linear-to-br from-orange-700 to-gray-700 mt-10 border rounded-xl px-4 py-2">
          <h3 className="text-white text-xl font-bold mb-3">Build</h3>
          <p className="text-gray-100 text-sm italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            sint?
          </p>
        </div>
      </div>
      <div className="bg-[url(/src/assets/background3.jpg)] min-h-80 bg-contain bg-no-repeat "></div>
    </div>
  );
}

export default About;
