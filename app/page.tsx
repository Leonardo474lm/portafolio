import CircularProgress from "@mui/joy/CircularProgress";
import Grid from "@mui/joy/Grid";
import Image from "next/image";
import Avatar from "@mui/joy/Avatar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Grid container spacing={2} sx={{ flexGrow: 2 }}>
        <Grid xs={12}>
          <Avatar />
          <h1>Leonardo Piero LLiuya Manrique</h1>
        </Grid>
        <Grid xs={4}>
          <h1>nadvar</h1>
        </Grid>
        <Grid xs={8}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
