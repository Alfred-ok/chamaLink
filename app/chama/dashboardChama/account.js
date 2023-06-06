"use client"
import React from 'react'
//import { useState } from 'react'
import { Card,CardContent,Typography } from '@mui/material'
import { SpaRounded } from '@mui/icons-material'
export default function Page() {
   // const [account, setAccount] = useState([
    //    {title:'',amount:''}
   // ])
  return (
    <div style={{display: 'flex',justifyContent:'space-around'}}>
     <Card style={{width:'30%'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body2">
            All documens are available.
          </Typography>
        </CardContent>
    </Card>
    <Card style={{width:'30%'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body2">
            All documens are available.
          </Typography>
        </CardContent>
    </Card>
    <Card style={{width:'30%'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body2">
            All documens are available.
          </Typography>
        </CardContent>
    </Card>
    </div>
  )
}
