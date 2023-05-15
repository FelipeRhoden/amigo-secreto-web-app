import { router } from "@/routes/router";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Stack spacing={1} sx={{ width: 320, m: "auto", pt: "25px" }} >
      <Typography color="primary.contrastText" variant="subtitle1">Amigo Secreto da Família</Typography>
      <Paper sx={{ width: "100%", p: "15px", height: "500px" }}>
        <RouterProvider router={router} />
      </Paper>
    </Stack>
  )
}

export default App
