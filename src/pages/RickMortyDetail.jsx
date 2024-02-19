import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickmortyService from "../services/rickmortyService";
import { Box, Grid } from "@mui/material";
import RickMortyCharacterDetail from "../components/RickMortyCharacterDetail";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import SearchBarr from "../components/SearchBarr";
export default function RickMortyDetail() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rickmortyService = new RickmortyService();
        const result = await rickmortyService.getEpisodesId(id);
        setDatas(result); 
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{backgroundColor:colors.primary[400]}}>
     
      {(datas.characters) && (
        <Grid sx={{marginLeft:0.5}} container spacing={3}  >
          {datas.characters.map((data, index) => {
            return <RickMortyCharacterDetail data={data} key={index} />;
          })}
        </Grid>
      )}
    </Box>
  );
}
