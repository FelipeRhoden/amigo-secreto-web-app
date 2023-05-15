import usePeople from "@/hooks/usePeople";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

function SecretFriend(){
    const { secretFriend, load, getASecretFriend ,personSelected } = usePeople();
    
    useEffect(() => { getASecretFriend(personSelected) }, [])

    return(
        <Stack alignItems="center">
            {load ?  <CircularProgress /> : 
                <>
                    <Avatar src={secretFriend.imageSrc} sx={{ width: 98, height: 98 }} />
                    <Typography variant="h5" align="center">
                        {secretFriend.name}
                    </Typography>
                </>
            }
            
        </Stack>
    )
}

export default SecretFriend;