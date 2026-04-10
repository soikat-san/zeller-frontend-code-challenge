import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFoundView = () => {
  const navigate = useNavigate();
  return (
    <>
      <DotLottieReact
        src="https://lottie.host/8f30fbad-07fa-41a6-860a-82d2156ea25d/KuawlHuXzr.lottie"
        loop
        autoplay
        className="pt-20 sm:pt-0"
      />
      <div className="flex justify-center pt-10 sm:pt-2 pb-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center p-6 rounded-2xl text-white text-md sm:text-3xl font-medium
                   bg-linear-to-r from-purple-500 via-pink-500 to-orange-400
                   shadow-lg hover:animate-pulse
                   cursor-pointer w-2/3 sm:w-1/2"
          aria-label="Go back to home page"
        >
          <House className="mr-2 w-6 h-6 sm:w-10 sm:h-10" />
          Let's Go Home
        </button>
      </div>
    </>
  );
};

export default NotFoundView;
