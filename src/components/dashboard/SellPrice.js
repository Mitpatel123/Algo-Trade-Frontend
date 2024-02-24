import React from 'react'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material'

const SellPrice = (props) => {
    const theme = useTheme()
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Market Price</TableCell>
                        <TableCell align="left">Sell Price</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell scope="row" style={{ display: 'flex', gap: 12, alignItems: 'center' }} >
                                <Box className={props.iconBg}>
                                    <img src={row.icon} /></Box> {row.name}
                            </TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left" style={{ color: theme.palette.error.main }} >{row.buyPrice}</TableCell>
                            <TableCell align="right" style={{ color: theme.palette.success.main, }}>{row.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></>
    )
}

export default SellPrice