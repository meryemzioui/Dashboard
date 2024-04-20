// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { ThemeSetting } from "./Theme";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
// import { useSelector } from "react-redux";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  // const mode = useSelector((state) => {
  //   state.global.mode;
  // });
  // const Theme = useMemo(() => createTheme(ThemeSetting(mode)), [mode]);


  const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // const userId = useSelector((state) => state.global.userId);
    // const { data } = useGetUserQuery(userId);

  return (

    
    <div className="app">
      {/* <ThemeProvider Theme={Theme}>
        <CssBaseline /> */}
        <Navbar></Navbar>
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        // user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          // user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
        
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
