import usePeople from "@/hooks/usePeople";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import type { Person } from "@/contexts/peopleContext";

function SecretFriend(){
    const { secretFriend, load, getASecretFriend ,personSelected } = usePeople();
    
    useEffect(() => { getASecretFriend(personSelected) }, [])

    return(
        <Stack alignItems="center" spacing={3}>
            {load ?  <CircularProgress /> : 
                <>
                    <Avatar src={secretFriend.imageSrc} sx={{ width: 98, height: 98 }} />
                    <Typography variant="h5" align="center">
                        {secretFriend.name}
                    </Typography>
                    {secretFriend.wishes && <Wishes person={secretFriend} />}
                </>
            }
            
        </Stack>
    )
}

function Wishes({ person }: { person: Person}) {
    return <>
        <Typography variant="h6" align="center">
            🎁 Lista de desejos
        </Typography>
        <Typography variant="body1">
            {person.wishes}
        </Typography>
    </>
}

export default SecretFriend;