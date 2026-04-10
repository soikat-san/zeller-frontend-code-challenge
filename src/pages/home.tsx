import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 5000);
      return () => clearTimeout(timer);
    } else if (step === 2) {
      const timer = setTimeout(() => setStep(3), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6">
      {step === 1 && (
        <div className="animate-fade-in">
          <DotLottieReact
            src="https://lottie.host/7c34b76a-2f26-4304-b445-c400db32b216/0hDSixnws7.lottie"
            autoplay
            loop
          />
        </div>
      )}

      {step === 2 && (
        <div className="h-80 animate-fade-in">
          <DotLottieReact
            src="https://lottie.host/cea3e12b-5bdf-4253-a96b-394acb48cc54/vOmFaoYDE5.lottie"
            autoplay
            loop
          />
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-2/3 text-center">
          <h1 className="text-md sm:text-5xl font-semibold bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Please click the button...
          </h1>

          <button
            onClick={() => navigate("/customers")}
            className="flex items-center justify-center p-4 rounded-2xl text-white text-md sm:text-3xl font-medium
               bg-linear-to-r from-purple-500 via-pink-500 to-orange-400
               cursor-pointer hover:scale-105 transition-transform"
            aria-label="Go to customers page"
          >
            Click me
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
