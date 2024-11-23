import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ListOfPeople from "@/components/listOfPeople";
import useStepper from "@/hooks/useStepper";
import usePeople from "@/hooks/usePeople";

function SelectWhoIsYou() {
    const { next } = useStepper();
    const { people, personSelected, setPerson, load } = usePeople();
    const peopleAvailable = people.filter(({secretFriendId}) => !secretFriendId );
    return (
        <Stack alignItems="center" spacing={3}>
            <ListOfPeople {...{people: peopleAvailable, personSelected, setPerson, load}}/>
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