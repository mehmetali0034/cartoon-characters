import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBarr(props) {
  const {handleSearch} = props;
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
    return (
        <Box>
            <Box>
                <InputBase
                    onChange={handleChange}
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Search"
                />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
        </Box>
    );
}