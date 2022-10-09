import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Tabs, Tab } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { DrawerComp } from "./Drawer";

import logo from "../../../images/logo.svg";

export const NavBar = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState("Movies");
  const [value2, setValue2] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="relative">
      <Toolbar sx={{ color: "white", margin: "0 60px" }}>
        <img src={logo} height={100} width={100} alt="logo" />
        {isMatch ? (
          <div style={{ marginLeft: "auto" }}>
            <DrawerComp />
          </div>
        ) : (
          <>
            <Tabs
              value={value}
              textColor="inherit"
              indicatorColor="secondary"
              onChange={handleChange}
            >
              <Tab value="Movies" label="Movies" />

              <Tab value="TV Show" label="TV Shows" />
              <Tab value="People" label="People" />
              <Tab value="More" label="More" />
            </Tabs>
            <Tabs
              value={value2}
              sx={{ marginLeft: "auto", color: "white" }}
              textColor="inherit"
              onChange={handleChange2}
            >
              <Tab icon={<AddIcon />} value={1} />

              <div
                style={{
                  marginTop: 14,
                  cursor: "pointer",
                  width: "26px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  border: "1px solid #fff",
                  borderRadius: "3px",
                  padding: " 3px 5px",
                  transition: "linear .1s",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9em",
                }}
              >
                EN
              </div>
              <Tab icon={<NotificationsIcon />} value={2} />
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "0.9em",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "orange",
                  marginTop: 14,
                  cursor: "pointer",
                }}
              >
                M
              </div>
              <Tab icon={<SearchIcon />} value={3} />
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
