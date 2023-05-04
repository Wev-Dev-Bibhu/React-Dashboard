import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { secondaryColor } from "../util/Color";

const Analytics = ({ data }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const analyticsData = [
    {
      key: "unique_plays",
      value: "Unique Plays",
      description: "Shosws all uniquely played songs",
    },
    {
      key: "total_plays",
      value: "Total Plays",
      description: "Total no. of songs played till now.",
    },
    {
      key: "completion_rate",
      value: "Completion Rate",
      description: "Users song completion rate.",
    },
  ];
  return (
    <Box sx={{ overflowY: "auto", height: "auto", mt: 1 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {analyticsData.map((item) => (
          <Card
            sx={{ width: 355, maxHeight: 350, mr: matchDownSM ? 0 : 2, mb: 1 }}
            key={item.key}
          >
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                width={200}
                height={200}
                data={data}
                margin={{
                  top: 20,
                  right: 50,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Line
                  connectNulls
                  type="monotone"
                  dataKey={item.key}
                  label="Unique Plays"
                  stroke="#8884d8"
                  fill="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ mb: 10 }}>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body1"
            sx={{ textDecoration: "underline", color: secondaryColor, mx: 3 }}
          >
            Graphical Data:
          </Typography>
        </Box>
        <ResponsiveContainer width={matchDownSM ? "100%" : "60%"} aspect={2}>
          <LineChart
            width={200}
            // height={matchDownSM ? 700 : 300}
            data={data}
            margin={{
              top: 15,
              right: matchDownSM ? 50 : 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="unique_plays"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="total_plays"
              label={"Total Plays"}
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Analytics;
