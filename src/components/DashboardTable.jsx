import React from "react";
import { Avatar, LinearProgress, Table, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tertiaryColor } from "../util/Color";

const DashboardTable = ({ data }) => {
  return (
    <TableContainer
      // sx={{ width: 380, overflowY: "hidden", overflowX: "scroll" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Completion Rate</TableCell>
            <TableCell align="center">Unique Plays</TableCell>
            <TableCell align="right">Total Plays</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={row.image} />
                  <Typography sx={{ pl: 1 }}>{row.title}</Typography>
                </div>
              </TableCell>
              <TableCell align="right">
                <LinearProgress
                  variant="determinate"
                  value={row.completion_rate}
                  valueBuffer={100}
                  sx={{ background: tertiaryColor }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                >{`${Math.round(row.completion_rate)}%`}</Typography>
              </TableCell>
              <TableCell align="center">{row.unique_plays}</TableCell>
              <TableCell align="right">{row.total_plays}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DashboardTable;
