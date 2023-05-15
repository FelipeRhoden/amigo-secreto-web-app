import LayoutTitle from "@/components/layoutTitle";
import MyStepper from "@/components/stepper";
import useStepper from "@/hooks/useStepper";
import Stack from "@mui/material/Stack";

function Home() {
  const { actualStep } = useStepper();
  return (
        <Stack spacing={3}>
          <MyStepper/>
          <LayoutTitle title={actualStep.title}>
            {actualStep.screen}
          </LayoutTitle>
        </Stack>
  )
}

export default Home;
