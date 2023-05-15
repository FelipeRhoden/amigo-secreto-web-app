import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
    title: string;
    children?: JSX.Element;
}

function LayoutTitle(props: Props) {
    const { children, title } = props;
    return (
        <Box sx={{ width: "100%" }}>
            <Typography variant="h6" align="center">
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default LayoutTitle;