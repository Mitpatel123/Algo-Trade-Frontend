// MyTable.js
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Box, TableContainer } from "@mui/material";

function getColor(value, mapping) {
  if (typeof mapping === "function") {
    return mapping(value);
  }
  return mapping || "white";
}

const colorMapping = {
  unLinkedTime: "#FF5555",
  unLinkedApp: "#FF5555",
  action: "#419DF1",
  sellPrice: "#FF5555",
  buyStatus: (value) =>
    value === "Cancelled"
      ? "#FF5555"
      : value === "Executed"
      ? "#6EBE52"
      : "white",
  sellStatus: (value) =>
    value === "Cancelled"
      ? "#FF5555"
      : value === "Executed"
      ? "#6EBE52"
      : "white",
  profit: "#419DF1",
};

function MyTable({
  headers,
  rows,
  imageColumn,
  border,
  borderRadius,
  imageVersion,
  onRowClick,
}) {
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
          {rows.length > 0 ? (
            <TableBody>
              {rows?.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  className="custom-table-row"
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {Object.entries(row)?.map(([key, cell], cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className="custom-table-cell"
                      align="center"
                      style={{
                        fontSize: "17px",
                        color: getColor(cell, colorMapping[key]),
                        border: "none",
                        minWidth: "150px",
                      }}
                    >
                      {imageVersion && imageColumn === key ? (
                        <Box
                          display="flex"
                          alignItems="center"
                          gap="15px"
                          justifyContent="center"
                        >
                          {/* <Avatar
                            src={cell.imageSrc}
                            alt="image"
                            sx={{ width: "57px", height: "57px" }}
                          /> */}

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
          ) : (
            <Box textAlign="center" width="100%" color="red" paddingY="15px">
              No Data Available
            </Box>
          )}
        </Table>
      </Box>
    </TableContainer>
  );
}

export default MyTable;
