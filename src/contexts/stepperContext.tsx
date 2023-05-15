import { MyStep, steps } from "@/steps/steps";
import { createContext, useState } from "react";

interface IStepperContext{
    steps: MyStep[];
    activeStep: number;
    actualStep: MyStep;
    next: () => void;
}

export const StepperContext = createContext<IStepperContext>({} as IStepperContext);

interface Props{
    children: JSX.Element
}

export const StepperProvider = function({ children }: Props){
    const [activeStep, setActiveStep] = useState(0);
    const actualStep = steps[activeStep];

    const next = () => {
        setActiveStep(activeStep + 1);
    }
    return (
        <StepperContext.Provider value={{steps, actualStep, activeStep, next}}>
            {children}
        </StepperContext.Provider>
    )
}