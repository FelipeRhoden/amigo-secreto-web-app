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

function ListOfPeople() {
    const { people, personSelected, setPerson, load } = usePeople();
    const peopleAvailable = people.filter(({secretFriendId}) => !secretFriendId );
    return (
        <>
            {load ? 
                <Stack sx={{ height: 240, justifyContent:"center", alignItems:"center" }}>
                    <CircularProgress />
                </Stack> :
                <>
                    {peopleAvailable.length === 0 ? 
                        <Stack sx={{ height: 240, justifyContent:"center", alignItems:"center" }}>
                            <Typography variant="subtitle1">Todos já selecionaram um amigo</Typography>
                        </Stack>
                        : <List sx={{ width: '100%', maxWidth: 360, height: 240, pt: 0, pb: 0, overflow: 'auto', bgcolor: 'background.paper' }}>
                            {peopleAvailable.map( person => (
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