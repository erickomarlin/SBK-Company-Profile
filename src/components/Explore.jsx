import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="fixed bottom-15 left-1/2
-translate-x-1/2 text-center w-60 py-2 bg-secondarymain text-white text-xl rounded-full hover:cursor-pointer hover:transition-all hover:scale-105 active:scale-100 hover:text-gray-300"
        onClick={() => navigate("/about")}
      >
        Explore More
      </button>
    </div>
  );
}

export default Explore;
