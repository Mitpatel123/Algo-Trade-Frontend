// MyTable.js
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, TableContainer } from "@mui/material";

function MyTable({ headers, rows, imageColumn, border, borderRadius }) {
  return (
    <TableContainer
      sx={{
        borderRadius: 2,
      }}
    >
      <Box
        sx={{ width: "100%" }}
        border="none"
        backgroundColor="transparent"
        boxShadow="none"
      >
        <Table
          style={{
            borderCollapse: borderRadius && "separate",
            borderSpacing: borderRadius && "0 6px",
          }}
          sx={{
            "& .MuiTableCell-head": {
              backgroundColor: "#0B253D",
            },
            "& .MuiTableRow-root": {
              backgroundColor: "#021629",
              border: border && border,
              borderRadius: borderRadius && borderRadius,
            },
            "& .MuiTableCell-body": {
              padding: "5px",
              height: "77px",
            },
            "& .custom-table-cell:first-child": {
              borderLeftStyle: "solid",
              borderTopLeftRadius: borderRadius || 0,
              borderBottomLeftRadius: borderRadius || 0,
            },
            "& .custom-table-cell:last-child": {
              borderRightStyle: "solid",
              borderTopRightRadius: borderRadius || 0,
              borderBottomRightRadius: borderRadius || 0,
            },
          }}
        >
          <TableHead>
            <TableRow>
              {headers?.map((header, index) => (
                <TableCell
                  align="center"
                  key={index}
                  style={{ fontSize: "18px", color: "white", border: "none" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="custom-table-row"
              >
                {Object.entries(row)?.map(([key, cell], cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className="custom-table-cell"
                    align="center"
                    style={{
                      fontSize: "17px",
                      color: "white",
                      border: "none",
                      minWidth: "150px",
                    }}
                  >
                    {imageColumn === key ? (
                      <Box
                        display="flex"
                        alignItems="center"
                        gap="15px"
                        justifyContent="center"
                      >
                        <img src={cell.imageSrc} alt="image" />
                        {cell.value}
                      </Box>
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}

export default MyTable;
