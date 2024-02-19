import React, { useEffect, useState } from "react";
import RickmortyService from "../services/rickmortyService";
import { Box,useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useNavigate } from "react-router-dom";
import SearchBarr from "../components/SearchBarr";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rickmortyService = new RickmortyService();
        const result = await rickmortyService.getEpisodes();
        setDatas(result); // result.data yerine sadece result 
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name",cellClassName: "name-column--cell",flex:1},//name'lere özel sınıf tanımladım bu sayede onu özelleştirebileceğim.
    
    {
      field: "air_date",
      headerName: "Air Date",
      headerAlign: 'left', // Sütun başlığının sola hizalanması
      align: 'left',       // Hücre içeriğinin sola hizalanması
    },
    { field: "episode", headerName: "Episode",flex:1,align: 'center',headerAlign:"center" },
  ];
  //console.log(datas.results)

  const handleRowClick = (params) => {
    const episodeId = params.row.id; // Tıklanan öğenin kimlik bilgisini al
    navigate(`rickandmorty/${episodeId}`); // Detaylar sayfasına yönlendir
  };

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchText) => {
    const filtered = datas.results.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Box>
    
    <Box
    height="53vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none",//column başlığı için ayarları yapmamı sağlayan sınıf
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400],
      },//Sanal kaydırıcı için ayarları yapmamı sağlayan sınıf
      "& .MuiDataGrid-footerContainer": { 
        borderTop:"none",
        backgroundColor: colors.blueAccent[700],//Tablonun alt footar kısmından sorumlu sınıf
      },
    }}
    >
      {datas.results && (
        <>
        <SearchBarr handleSearch={handleSearch}/>
        
      <DataGrid  
        rows={filteredData.length > 0 ? filteredData : datas.results }
        columns={columns}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSize={5} 
        pagination={true}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      /> </>) }
    </Box>
    </Box>
  );
}
