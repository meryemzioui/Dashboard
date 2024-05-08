import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import FlexBetween from "../Components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../Redux/Slices/ModeSlice";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <Avatar sx={{ bgcolor: theme.palette.info.light }}>M</Avatar>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
