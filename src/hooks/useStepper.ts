import { StepperContext } from "@/contexts/stepperContext";
import { useContext } from "react";

function useStepper(){
    return useContext(StepperContext);
}

export default useStepper;