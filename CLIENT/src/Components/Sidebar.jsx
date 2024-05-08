import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronRightOutlined,
  SchoolRounded,
  AccountTreeRounded,
  HomeRounded,
  EqualizerRounded,
  AdminPanelSettingsRounded,
  GroupsRounded,
  HelpRounded,
  PersonRounded,
  ChevronLeft,
  EmailRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { Menu as MenuIcon } from "@mui/icons-material";

const navItems = [
  {
    text: "Home",
    icon: <HomeRounded />,
  },
  {
    text: "Student",
    icon: <PersonRounded />,
  },
  {
    text: "Class",
    icon: <GroupsRounded />,
  },

  {
    text: "Counselling",
    icon: <AccountTreeRounded />,
  },
  {
    text: "Statics",
    icon: <EqualizerRounded />,
  },
  {
    text: "Help",
    icon: <HelpRounded />,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsRounded />,
  },
  {
    text: "Contact",
    icon: <EmailRounded />,
  },
];

const Sidebar = ({
  // eslint-disable-next-line react/prop-types
  drawerWidth,
  // eslint-disable-next-line react/prop-types
  isSidebarOpen,
  // eslint-disable-next-line react/prop-types
  setIsSidebarOpen,
  // eslint-disable-next-line react/prop-types
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.info.light}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                    <IconButton
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                      <MenuIcon />
                    </IconButton>
                  <SchoolRounded />
                  <Typography variant="h4" fontWeight="bold">
                    OrientPro
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
