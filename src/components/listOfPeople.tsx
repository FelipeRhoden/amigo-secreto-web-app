import { Person } from "@/contexts/peopleContext";
import usePeople from "@/hooks/usePeople";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface ListOfPeopleProps {
    people: Person[];
    personSelected: Person;
    setPerson: (Person: Person) => void;
    load: boolean
}

function ListOfPeople(props: ListOfPeopleProps) {
    const { people, personSelected, setPerson, load } = props;
    return (
        <>
            {load ?
                <Stack sx={{ height: 240, justifyContent:"center", alignItems:"center" }}>
                    <CircularProgress />
                </Stack> :
                <>
                    {people.length === 0 ?
                        <Stack sx={{ height: 240, justifyContent:"center", alignItems:"center" }}>
                            <Typography variant="subtitle1">Todos já selecionaram um amigo</Typography>
                        </Stack>
                        : <List sx={{ width: '100%', maxWidth: 360, height: 240, pt: 0, pb: 0, overflow: 'auto', bgcolor: 'background.paper' }}>
                            {people.map( person => (
                                <ListItem
                                    key={person.id}
                                    secondaryAction={
                                        <Checkbox
                                            onClick={() => setPerson(person)}
                                            checked={personSelected.id === person.id}
                                            edge="end"
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton onClick={() => setPerson(person)}>
                                        <ListItemAvatar>
                                            <Avatar src={person.imageSrc}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={person.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    }
                </>
            }
        </>
    )
}

export default ListOfPeople;