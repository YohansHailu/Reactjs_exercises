import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import Contailer from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Grid container sp={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <TopBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
