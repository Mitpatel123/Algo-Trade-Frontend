import React from 'react'
import { Box, Grid } from '@mui/material'
import SideBar from './common/sidebar'


const Layout = ({ children }) => {

    return (
      <>
        <Box marginX={2} marginTop={2}>
          <SideBar children={children} />
        </Box>
      </>
    );
}

export default Layout
