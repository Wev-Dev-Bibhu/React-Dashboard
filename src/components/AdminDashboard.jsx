import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { iconStyle, menuStyle } from "../CSS/Styles";
import {
  Category,
  Equalizer,
  Group,
  LibraryMusic,
  Settings,
  Wysiwyg,
} from "@mui/icons-material";
import data from "../JsonData/DashboardData.json";
import { commonColor, secondaryColor } from "../util/Color";
import Pages from "./Pages";
import Analytics from "./Analytics";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import { Avatar, Tooltip } from "@mui/material";

const drawerWidth = 300;

const AdminDashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [renderPage, setRenderPage] = useState("Songs");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuList1 = ["Songs", "Analytics", "Users", "Products"];
  const menuList2 = ["Basics", "Manage", "Settings"];

  const drawer = (
    <Box sx={menuStyle}>
      <Typography component="div" textAlign="center" sx={{ py: 2 }}>
        Dashboard
      </Typography>
      <Divider sx={{ background: commonColor }} variant="middle" />
      <List>
        {menuList1.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                mb: 0.5,
                mx: 2,
                "&:hover": {
                  background: secondaryColor,
                },
                background: renderPage === item && secondaryColor,
              }}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setRenderPage(item);
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <LibraryMusic sx={iconStyle} />
                ) : index === 1 ? (
                  <Equalizer sx={iconStyle} />
                ) : index === 2 ? (
                  <Group sx={iconStyle} />
                ) : (
                  <Category sx={iconStyle} />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: commonColor }} variant="middle" />
      <List>
        {menuList2.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                mb: 0.5,
                mx: 2,
                "&:hover": {
                  background: secondaryColor,
                },
                background: renderPage === item && secondaryColor,
              }}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                console.log(mobileOpen);
                setRenderPage(item);
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <InboxIcon sx={iconStyle} />
                ) : index === 1 ? (
                  <Wysiwyg sx={iconStyle} />
                ) : (
                  <Settings sx={iconStyle} />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: commonColor,
          color: secondaryColor,
        }}
      >
        <Toolbar sx={{ width: "100%", mt: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard / {renderPage}
          </Typography>
          <Box
            sx={{ position: "absolute", right: 20, cursor: "pointer", pb: 1 }}
          >
            <Tooltip title="Profile">
              <Avatar />
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            bgcolor: "transparent",
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box component="div" sx={{ overflow: "auto", height: "80vh", px: 1 }}>
          {renderPage === "Songs" && <Pages data={data} />}
          {renderPage === "Analytics" && <Analytics data={data} />}
          {renderPage === "Products" && <PageNotFound data={data} />}
          {renderPage === "Users" && <PageNotFound data={data} />}
          {renderPage === "Settings" && <PageNotFound data={data} />}
          {renderPage === "Manage" && <PageNotFound data={data} />}
          {renderPage === "Basics" && <PageNotFound data={data} />}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default AdminDashboard;
