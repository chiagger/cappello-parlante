import { useParams } from "react-router-dom";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";

const Quiz = () => {
  const { action } = useParams();

  return (
    <>
      {action === "step-1" && <Step1 />}
      {action === "step-2" && <Step2 />}
    </>
  );
};

export default Quiz;
