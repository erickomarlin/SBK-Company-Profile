import ClientCard from "../components/ClientCard";

function Clients() {
  return (
    <div>
      <div className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center p-6 pb-12 md:px-8 md:pt-12">
        <h1 className="text-5xl text-orange-900 font-bold ">Our Clients</h1>
        <ClientCard />
      </div>
      <div className="bg-[url(/src/assets/background3.jpg)] w-full h-30 bg-center"></div>
    </div>
  );
}

export default Clients;
