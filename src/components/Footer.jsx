import { CopyrightOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  let date = new Date();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 1,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <CopyrightOutlined />
          {date.getFullYear()}, made by Bibhuti
        </Box>
        {/* <Box sx={{ width: "50%" }}></Box> */}
      </Box>
    </>
  );
};

export default Footer;
