import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.webp";
import profile3 from "../assets/profile3.webp";

function Team() {
  return (
    <div className="flex flex-col justify-center bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-center bg-cover min-h-screen p-6 justify-start items-center">
      <h1 className="text-5xl mt-5 text-orange-900 font-bold">Meet The Team</h1>
      <p className="text-md mt-10 text-justify text-gray-900 font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tenetur
        accusantium repellat corrupti, adipisci esse perspiciatis fugit
        consequuntur, libero molestiae ipsum aspernatur magni quos maiores
        nesciunt officiis sunt. Explicabo, quos.
      </p>
      <div id="profile-container" className="mt-15 flex flex-col gap-12 pb-10">
        <img src={profile1} alt="profile1" className="w-50 rounded-xl" />
        <img src={profile2} alt="profile1" className="w-50 rounded-xl" />
        <img src={profile3} alt="profile1" className="w-50 rounded-xl" />
      </div>
    </div>
  );
}

export default Team;
