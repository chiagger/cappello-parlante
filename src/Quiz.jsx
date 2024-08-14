import { useParams } from "react-router-dom";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Step4 from "./Step4.jsx";

const Quiz = () => {
  const { action } = useParams();

  return (
    <>
      {action === "step-1" && <Step1 />}
      {action === "step-2" && <Step2 />}
      {action === "step-3" && <Step3 />}
      {action === "step-4" && <Step4 />}
    </>
  );
};

export default Quiz;
