import usePeople from "@/hooks/usePeople";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Admin() {
    const { people, load, clearAll } = usePeople();
    const hasSameFriend = people.filter(person1 =>
        person1.secretFriendId && people.findIndex(person2 =>
            person2.id !== person1.id
            && person2.secretFriendId
            && person2.secretFriendId === person1.secretFriendId
        ) > -1
    )
    return (
        <Stack spacing={3} style={{ overflow: "auto", height: "100%" }}>
            <Typography variant="subtitle1">Pessoas com os mesmo amigos</Typography>
            <List sx={{ width: '100%', maxWidth: 360, height: 240, pt: 0, pb: 0, overflow: 'auto', bgcolor: 'background.paper' }}>
                {load ? <CircularProgress /> : hasSameFriend.map(person => (
                    <ListItem
                        key={person.id}
                        disablePadding
                    >
                        <ListItemAvatar>
                            <Avatar src={person.imageSrc} />
                        </ListItemAvatar>
                        <ListItemText primary={`${person.name} > ${person.secretFriendId}`} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="subtitle1">Pessoas e seus amigos</Typography>
            <List sx={{ width: '100%', maxWidth: 360, height: 240, pt: 0, pb: 0, overflow: 'auto', bgcolor: 'background.paper' }}>
                {load ? <CircularProgress /> : people.map(person => (
                    <ListItem
                        key={person.id}
                        disablePadding
                    >
                        <ListItemAvatar>
                            <Avatar src={person.imageSrc} />
                        </ListItemAvatar>
                        <ListItemText primary={`${person.name} > ${person.secretFriendId ? people
                            .find(({ id }) => id === person.secretFriendId)?.name : 'Sem Amigo'}`} />
                    </ListItem>
                ))}
            </List>
            <Button onClick={clearAll}>Limpar Tudo</Button>
        </Stack>
    )
}

export default Admin;
