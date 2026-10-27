import Explore from "../components/Explore";

function Home() {
  return (
    <div className="bg-[url(/src/assets/background1sketch.jpg)] bg-no-repeat bg-cover p-6 pt-8 flex flex-col justify-start items-start min-h-screen md:px-10 lg:pt-12">
      <h1 className="text-orange-900 text-4xl lg:text-5xl">Semesta Building</h1>
      <h1 className="text-gray-900 text-4xl lg:text-5xl">Konstruksi</h1>
      <h3 className="text-md text-white font-semibold bg-amber-900 mt-4 rounded-r-full pl-2 pr-6 py-1 lg:pl-4 lg:pr-12">
        Your Trusted Building Solution
      </h3>
      <Explore />
    </div>
  );
}

export default Home;
