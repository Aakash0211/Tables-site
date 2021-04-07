import React from 'react'
import {AppBar,Toolbar,Typography, Container} from '@material-ui/core'
export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor:'#2b3c4d',marginTop:45,height:63}} >
          <Container maxWidth="md">
            <Toolbar style={{marginLeft:4,display:'flex',justifyContent:'space-evenly'}}>
              <Typography variant='subtitle1'>
                About View Manage™ • Terms •  Question ?  Contact View Support
              </Typography>
              
            </Toolbar>
          </Container>
        </AppBar>
    )
}