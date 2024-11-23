import LayoutTitle from "@/components/layoutTitle";
import ListOfPeople from "@/components/listOfPeople";
import usePeople from "@/hooks/usePeople";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function Wishes() {
    const [step, setStep] = useState(0);
    return (
        <Stack spacing={3}>
            <Typography variant="h6" >🎁 Lista de desejos</Typography>
            { step === 0 && <SelectWhoIsYou next={() => setStep(1)}/> }
            { step === 1 && <TypeYourWishes next={() => setStep(2)}/> }
            { step === 2 && <SavedWishes/> }
        </Stack>
    )
}

interface Props {
    next: () => void
}

function SelectWhoIsYou({next}: Props) {
    const { people, personSelected, setPerson, load } = usePeople();
    const peopleAvailable = people.filter(({wishes}) => !wishes );
    return <Stack alignItems="center" spacing={3}>
        <LayoutTitle title="Selecione quem você é">
            <ListOfPeople {...{ people: peopleAvailable, personSelected, setPerson, load }}/>
        </LayoutTitle>
        <Button
            size="large"
            variant="contained"
            disabled={!personSelected.id}
            onClick={next}
        >
            Próximo
        </Button>
    </Stack>
}

function TypeYourWishes({next}: Props) {
    const { personSelected, saveWishes } = usePeople();
    const [wishes, setWishes] = useState("");

    const handleSave = () => {
        saveWishes(personSelected, wishes);
        next();
    }
    return <Stack alignItems="center" spacing={3}>
        <LayoutTitle title="Informe os seus desejos">
        <TextField
            placeholder="1. Eu gostaria de ganhar um 🩴..."
            multiline
            sx={{width: "100%"}}
            rows={10}
            value={wishes}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setWishes(event.target.value);
            }}
        />
        </LayoutTitle>
        <Button
            size="large"
            variant="contained"
            disabled={!wishes}
            onClick={handleSave}
        >
            Salvar
        </Button>
    </Stack>
}

function SavedWishes(){
    const { load } = usePeople();
    return <Stack alignItems="center">
    {load ? <CircularProgress /> :
        <>
            <Typography variant="h5" align="center">
                Desejos salvos com sucesso 🥳
            </Typography>
        </>
    }
</Stack>
}

export default Wishes;
