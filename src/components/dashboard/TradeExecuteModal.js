import React from 'react'
import { Button, Grid } from '@mui/material'
import Label from '../common/label'
import CommonDropdown from '../../components/CommonDropdown'

const TradeExecuteModal = () => {
  const [data, setData] = React.useState({});

  const index = ['Sensex', "Fin Nifty", "Mid Cap", "Nifty 50", "Bank nifty"]

  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={10}>
        <Grid item spacing={5} container xs={12} sm={12} md={12} lg={12} xl={12}   >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Label fontSize={"22px"} text={'Trade Execute'} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Index"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Strick Price"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Buy/Sell"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Call/Put"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Intraday/Long Day"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Expiry Offset"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={'100%'}
              values={index || []}
              text="Limit Price/Market Price"
              name="currency"
              value={data?.index}
              onChange={(e) => {
                setData({ ...data, index: e.target.value })
              }}
              valid
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign={'center'}>
            <Button size="large" fullWidth variant="contained" style={{ marginTop: '10px', maxWidth: '300px' }} >Place Order</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default TradeExecuteModal