import useStepper from "@/hooks/useStepper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function FindYourSecretFriend(){
    const { next } = useStepper();
    return(
        <Stack alignItems="center">
            <Button size="large" onClick={next} variant="contained" sx={{ mt: 15 }}>
                Clique aqui para descobrir
            </Button>
        </Stack>
    )
}

export default FindYourSecretFriend;