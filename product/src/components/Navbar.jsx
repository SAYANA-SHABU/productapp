import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import FitbitSharpIcon from '@mui/icons-material/FitbitSharp'
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp'
import Home from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={2}>
           
        <AppBar sx={{background: 'rgb(87,36,57)',
background:' linear-gradient(90deg, rgba(87,36,57,1) 0%, rgba(87,36,57,1) 0%, rgba(240,116,157,1) 49%, rgba(179,23,23,1) 100%)'}}>
            <Toolbar>
            <FitbitSharpIcon sx={{fontSize:'46px'}}/>&nbsp;
          <Grid item xs={1}  >
            
            
            <Typography sx={{fontSize:'34px',fontFamily:'Bernard MT Condensed'}}>Fazio</Typography></Grid>
           
           <Grid item xs={80}></Grid>
           <Grid item xs={0}> <Link to ='/home'><Button variant='filled'><Home sx={{fontSize:'32px',color:'white'}}/></Button></Link></Grid>
           
           <Grid item xs={0}> <Link to='/prod'><Button variant='filled'><ProductionQuantityLimitsSharpIcon sx={{fontSize:'32px',color:'white'}}/></Button></Link></Grid>
          
         
            </Toolbar>
        </AppBar>
        </Grid>
        <br></br>
    </div>
  )
}

export default Navbar