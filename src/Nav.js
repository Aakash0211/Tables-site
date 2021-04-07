import React from 'react'
import {AppBar,Toolbar,Typography, makeStyles,Avatar} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import RoomIcon from '@material-ui/icons/Room';
const useStyles=makeStyles({
   link:{
    flexGrow:1,
    fontWeight:'bold',
    paddingRight:"40px",
    paddingLeft:41,
    color:'#2b3c4d',
    opacity:0.7,
    fontSize:"17px",
    fontFamily: "Roboto",
    
   } ,
   links:{
    display:"flex",
    justifyContent:"flex-end",
    paddingLeft:"40px",
    paddingRight:10,
    color:"Black",
    fontFamily: "Dekko"
   }
})

const Nav = () => {
  
    const classes=useStyles()
        return (
        <>
          <AppBar style={{backgroundColor:'white',height:60}} >
              <Toolbar>
              <Typography className={classes.link} variant='inherit' >
              MANAGE
            </Typography>
            
            <Typography component="button" style={{display:'flex',justifyContent:'center',alignitems:'center',border:'white',backgroundColor:'#e7eff3',width:245,height:40,paddingRight:120,paddingTop:9,borderRadius:5,color:'#2b3c4d'}}>
              <RoomIcon fontSize='small' color='inherit' style={{ paddingRight:3,color:'#2b3c4d'}}/> View loT Lab
            </Typography>
          
            <NavLink   activeStyle={{textDecoration:'underline',textDecorationColor:'red'}}  style={{textDecoration:"none"}} to="/Overview"><Typography className={classes.links} variant='h6' >
              Overview
            </Typography></NavLink>
            <NavLink activeStyle={{textDecoration:'underline',textDecorationColor:'red'}} style={{textDecoration:"none"}} to="/Safe"><Typography className={classes.links} variant='h6' >
              Safe
            </Typography></NavLink>
            
            <NavLink activeStyle={{textDecoration:'underline',textDecorationColor:'red',textDecorationStyle:'solid'}} style={{textDecoration:"none"}} to="/Glass"><Typography className={classes.links} variant='h6' >
              Glass
            </Typography></NavLink>
            <NavLink activeStyle={{textDecoration:'underline',textDecorationColor:'red'}} style={{textDecoration:"none"}} to="/Sense"><Typography className={classes.links} variant='h6' >
              Sense
            </Typography></NavLink>
            <NavLink activeStyle={{textDecoration:'underline',textDecorationColor:'red'}}  style={{textDecoration:"none"}} to="/Users"><Typography className={classes.links} variant='h6' >
              Users
            </Typography></NavLink>
            <Avatar variant='circle'  style={{marginLeft:300,color:'black',width:33,height:30,fontSize:13,borderColor:'black'}} >NT</Avatar>
              </Toolbar>               
          </AppBar>  
        </>
    )
}

export default Nav
