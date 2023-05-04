import React from "react";
import DashboardTable from "./DashboardTable";
import DashboardChart from "./DashboardChart";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { secondaryColor, tertiaryColor } from "../util/Color";

const Pages = ({ data }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const annualData = [
    {
      key: "Clients",
      values: "12M",
      date: "March 2022 - May 2023",
      addups: "+42%",
    },
    {
      key: "Downloads",
      values: "32M",
      date: "March 2022 - May 2023",
      addups: "+72M",
    },
    {
      key: "Revenues",
      values: "$660",
      date: "March 2022 - May 2023",
      addups: "+$32M",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 3,
          p: 1,
          pb: 2,
          flexWrap: "wrap",
          flexDirection: matchDownSM ? "column" : "rows",
        }}
      >
        {annualData.map((item) => (
          <Box
            key={item.key}
            sx={{
              width: matchDownSM ? "100%" : "30%",
              height: 100,
              p: 2,
              display: "flex",
              mb: matchDownSM ? 1.5 : 0,
            }}
            style={{}}
            component={Paper}
          >
            <div style={{ width: "50%", position: "relative" }}>
              <Typography variant="body1" sx={{ color: secondaryColor }}>
                {item.key}
              </Typography>
              <b>{item.values}</b>
              <Typography
                sx={{ position: "absolute", fontSize: 14 }}
                variant="body1"
              >
                <span style={{ color: "green", fontWeight: "600" }}>
                  {item.addups}
                </span>{" "}
                since last year
              </Typography>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
              <Typography
                variant="body2"
                sx={{ fontSize: 10, color: tertiaryColor }}
              >
                {item.date}
              </Typography>
            </div>
          </Box>
        ))}
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="body1"
          sx={{ color: secondaryColor, px: 2, textDecoration: "underline" }}
        >
          Our Top Users Choice:
        </Typography>
      </Box>
      <DashboardTable data={data} />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="body1"
          sx={{ color: secondaryColor, px: 2, textDecoration: "underline" }}
        >
          Average Data:
        </Typography>
      </Box>
      <DashboardChart data={data} />
    </>
  );
};

export default Pages;
