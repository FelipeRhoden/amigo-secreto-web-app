import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ListOfPeople from "@/components/listOfPeople";
import useStepper from "@/hooks/useStepper";
import usePeople from "@/hooks/usePeople";

function SelectWhoIsYou() {
    const { next } = useStepper();
    const { personSelected } = usePeople();
    return (
        <Stack alignItems="center" spacing={3}>
            <ListOfPeople />
            <Button
                size="large"
                variant="contained"
                disabled={!personSelected.id}
                onClick={next}
            >
                Próximo
            </Button>
        </Stack>
    );
}

export default SelectWhoIsYou;