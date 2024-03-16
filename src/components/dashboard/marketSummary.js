import React from 'react'
import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import Label from '../common/label'

const useStyles = makeStyles()((theme) => {
    return {}
})
const MarketSummary = (props) => {
    const { classes } = useStyles()
    const theme = useTheme()
    const { setIsTradeExecute, data, iconBg, setSelectedIndex } = props;
    return (
      <>
        <Label
          color={"white"}
          fontSize={"23px"}
          fontWeight={500}
          text={"Market"}
        />
        <Divider
          style={{
            backgroundColor: "#163A5C",
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="right">Changes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  scope="row"
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsTradeExecute(true);
                    setSelectedIndex(row.name);
                  }}
                >
                  <Box className={iconBg}>
                    <img src={row.icon} />
                  </Box>{" "}
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: row.changes.includes("+")
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                  }}
                >
                  {row.changes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
}

export default MarketSummary