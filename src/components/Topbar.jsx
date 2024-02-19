import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Topbar() {
  const theme = useTheme();
  //Material-UI'da useTheme hook'u, tema (theme) nesnesine erişmenizi sağlar. Bu hook'u kullanarak, ThemeProvider içinde olmasanız
  //bile tema özelliklerine erişebilirsiniz.Yani themeyı yakalıyor. useTheme hook'u, ThemeProvider tarafından sağlanan temayı almanıza yardımcı olur.
  const colors = tokens(theme.palette.mode); //Yani dark başlangıç olarak dark sonrasında colorMode her tetiklendi*ğinde değişecek
  const colorMode = useContext(ColorModeContext); //Bu şekilde colorMode değerimi ColorModeContext.Provider'ın valuusu içerisindeki colorMode ' a eşitledim. colorMode kullanarak ColorModeContext içerisine yazdığın value değerine ulaşabileceğim
  // justifyContent="space-between" asıl özellliği içerisindeki ilk öğe ,ile son öğre arasındaki mesafeyi max yapmaktır.P={2} diyerekte içeriği etrafında bir kenar boşluğu (padding) ekler. p özelliği, tüm kenarlarına aynı kenar boşluğunu uygular.
  //DarkButtona tıklandığı zaman colorMode.toggleColorMode fonksiyonu tetiklenecektir.
  const [anchorEl, setAnchorEl] = useState(null);
  const favorites = useSelector((state)=>state.favorites) //Burada favorilerime ulaşma sebeim savori yazısının yanında sayısını yazdırmak.

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
       

      </Box>
      <Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
          variant="h2"
        >
          Cartoon Characters
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <AccountCircleIcon /> My Account
        </MenuItem>
        <MenuItem onClick={()=>{navigate("/rickandmorty/myfavorites")}}>
          <FavoriteIcon/> Favorites  ({favorites.favorites.length})
        </MenuItem>
      </Menu>
    </Box>
  );
}
