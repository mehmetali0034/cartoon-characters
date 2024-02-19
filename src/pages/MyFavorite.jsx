import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { removeFromFavorites } from "../store/favSlice";
import SearchBarr from "../components/SearchBarr";
export default function MyFavorite() {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites.favorites);
  console.log("Yavuz");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const deleteFromFavori = (id) => {debugger
    dispatch(removeFromFavorites(id));
    setOpenDialog(false)
    debugger;
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [catchIndex, setCatchIndex] = useState(null)
  const tyrDeleteFromFav = (index) => {
    setOpenDialog(true);
    setCatchIndex(index)
  };
  const closeDilog = () => {
    setOpenDialog(false);
  };



  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchText) => {
    const filtered = favorites.favorites.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: colors.redAccent[400],
          marginBottom: 5,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        My Favorites
      </Typography>
      <Box sx={{marginBottom:5}}>
      <SearchBarr
       handleSearch={handleSearch}/>
      </Box>
      <Grid container spacing={3}>
        {(filteredData.length > 0 ? filteredData : favorites.favorites).map((data, index) => (
          <Grid xs={12} md={3}>
            <Paper
              sx={{
                backgroundColor: colors.greenAccent[700],
                borderRadius: 9,
                padding: 2,
                margin: 2,
              }}
              elevation={7}
            >
              <Box sx={{ textAlign: "center" }}>
                <img className="characterImage" src={data.image} />
              </Box>

              <Typography variant="h4" style={{ textAlign: "center" }}>
                {data.name}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body1">Status : {data.status}</Typography>
                <Typography variant="body1">
                  Species : {data.species}
                </Typography>
                <Typography variant="body1">Gender:{data.gender}</Typography>
                <IconButton onClick={() =>
                        tyrDeleteFromFav(index) }>
                  <FavoriteIcon />
                </IconButton>
                <Dialog
                  open={openDialog}
                  onClose={closeDilog}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: colors.primary[400], // Dialog arka plan rengi
                    },
                    "& .MuiDialogTitle-root": {
                      backgroundColor: colors.primary[400], // Dialog başlık arka plan rengi
                    },
                    "& .MuiDialogContent-root": {
                      backgroundColor: colors.primary[400], // Dialog içerik arka plan rengi
                    },
                    "& .MuiButton-root": {
                      backgroundColor: colors.primary[400], // Buton arka plan rengi
                      color: colors.greenAccent[400], // Buton metin rengi
                    },
                  }}
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Confirm Deletion of Favorite Character"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are You Sure  You Want to Delete This Character From Favori ?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeDilog}>No</Button>
                    <Button
                      onClick={() =>
                        deleteFromFavori(favorites.favorites[catchIndex]) 
                      }
                      autoFocus
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
