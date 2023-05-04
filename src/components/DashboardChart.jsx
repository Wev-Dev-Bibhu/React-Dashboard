import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { secondaryColor, tertiaryColor } from "../util/Color";
import { useMediaQuery, useTheme } from "@mui/material";

const DashboardChart = ({ data }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ResponsiveContainer
        width={matchDownSM ? "100%" : "60%"}
        height="auto"
        aspect={2}
      >
        <BarChart
          width={600}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend height={36} />
          <Bar
            dataKey="unique_plays"
            label="Unique Plays"
            fill={secondaryColor}
          />
          <Bar dataKey="total_plays" fill={tertiaryColor} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardChart;
