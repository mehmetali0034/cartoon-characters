import { Alert, Box, Grid, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import RickmortyService from "../services/rickmortyService";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favSlice";
export default function RickMortyCharacterDetail(props) {
  const { data } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [allCharacterName, setAllCharacterName] = useState([]);debugger
  const [datas, setDatas] = useState([]);
  const favorites = useSelector((state) => state.favorites); //Burada da redux'ımda bulunan verilere eriştim. Çünkü uzunluğu 10 'u geçiyorsa mesaj vereceğim
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rickmortyService = new RickmortyService();
        const result = await rickmortyService.getCharactersDetail(data);
        setDatas(result); 

      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    fetchData();
  }, []);
  const [favState, setFavState] = useState(false);
  const [maxFavoritesState, setMaxFavoritesState] = useState(false);
  
  const handleFav = () => {
   
      setFavState((prev) => !prev);
      if (favState) {
        dispatch(removeFromFavorites(datas));
      } else {
        if (favorites.favorites.length < 10) {
        dispatch(addToFavorites(datas));debugger
      } else {
        setMaxFavoritesState(true);
      }
      }
    
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMaxFavoritesState(false);
  };
  return (
    <Grid item xs={12} md={3}>
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
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} className="characterImage" src={datas.image} />
        </Box>

        <Typography variant="h4" style={{ textAlign: "center" }}>
          {datas.name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1">Status : {datas.status}</Typography>
          <Typography variant="body1">Species : {datas.species}</Typography>
          <Box display="flex" alignContent="space-between">
            <Typography variant="body1">Gender : {datas.gender}</Typography>
            <IconButton onClick={handleFav} sx={{ marginLeft: 18 }}>
              {(favState) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
        <Snackbar open={maxFavoritesState} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          You can Have up to 10 Favorite Characters. You Have Exceeded your Limit!
        </Alert>
      </Snackbar>
      </Paper>
    </Grid>
  );
}
