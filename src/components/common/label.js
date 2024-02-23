import { Typography } from '@mui/material'
import React from 'react'

const Label = (props) => {
    return (
        <Typography marginBottom={props?.marginBottom} fontSize={props?.fontSize} color={props?.color} fontWeight={props.fontWeight} fontFamily={'"Poppins",sans-serif'}>{props?.text}</Typography>
    )
}

export default Label