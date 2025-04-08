import CircularProgress from "@mui/joy/CircularProgress";
import Grid from "@mui/joy/Grid";
import Avatar from "@mui/joy/Avatar";
import { Box, Card, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
    >
      <Box sx={{ gridColumn: "span 12" }}>
        <div className="flex w-full flex-row items-center justify-center border-2  p-2 h-full">
          <h1>Leonardo Piero LLiuya Manrique</h1>
        </div>
      </Box>
      <Box sx={{ gridColumn: "span 12" }}>
        <div className="flex w-full flex-row items-center justify-center border-2  p-2 h-dvw-full">
          <Card sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">
                App para registro de mensajes!
              </Typography>
              <Typography level="body-sm">Last version:07-042025</Typography>
            </div>
          </Card>
        </div>
      </Box>
    </Box>
  );
}
