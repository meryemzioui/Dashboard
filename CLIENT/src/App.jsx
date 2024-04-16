import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeSetting } from "./Theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state) => {
    state.global.mode;
  });
  const Theme = useMemo(() => createTheme(ThemeSetting(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider Theme={Theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};

export default App;
