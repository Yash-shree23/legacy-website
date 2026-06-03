import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-2
        text-[#0F172A]
        font-semibold
        hover:text-[#C9A227]
        transition
      "
    >
      ← Back
    </button>
  );
}

export default BackButton;