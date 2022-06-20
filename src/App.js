import { ThemeProvider, Box, Container, useMediaQuery } from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { AppBarDesktop, AppBarMobile } from "./Components/Nav";
import { Banner } from "./Components/Banner";
import { ProductsMobile, ProductsDesktop } from "./Components/Products";
import { Footer } from "./Components/Footer";
import { MyDrawer } from "./Components/Drawer";
import { ContextProvider } from "./Components/Context";

function App() {
  useEffect(() => {
    window.document.title = isMobile ? "Mobile" : "Desktop";
  });
  let theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: 250,
            borderRadius: "0 100px 0 0",
          },
        },
      },
    },
  });

  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          {isMobile ? <AppBarMobile /> : <AppBarDesktop />}
          <Banner isMobile={isMobile} />
          {isMobile ? <ProductsMobile /> : <ProductsDesktop />}
          <Footer />
          <MyDrawer open={true} />
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
