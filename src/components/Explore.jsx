import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="w-40 py-1 mt-12 bg-sky-950 text-white font-xl rounded-full hover:cursor-pointer hover:transition-all hover:scale-105"
        onClick={() => navigate("/about")}
      >
        Explore More
      </button>
    </div>
  );
}

export default Explore;
