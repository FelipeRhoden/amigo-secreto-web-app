import useStepper from "@/hooks/useStepper";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";


function MyStepper() {
    const { steps, activeStep } = useStepper();
    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.filter(({ showInList }) => showInList).map(({ title }, index) => (
                    <Step key={index}>
                        <StepLabel>{title}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default MyStepper;