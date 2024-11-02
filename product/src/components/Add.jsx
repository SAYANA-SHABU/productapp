import {  Button, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
const currencies = [
    {
      value: "men's clothing",
      label: "men's clothing",
    },
    {
      value: 'jewelery',
      label: 'jewelery',
    },
    {
      value: 'electronics',
      label: 'electronics',
    },
    {
      value: "women's clothing",
      label: "women's clothing",
    },
  ];
const Add = () => {
  return (
    <div>
    <br></br><br></br>
    <div id='id1'>
        <Typography sx={{fontFamily:'Cooper Black',fontSize:'40px'}} >Add your Product</Typography>
        <h1 id='h'></h1>
        <TextField label='Product Name'  variant='standard'/><br></br><br></br>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          helperText="Please select your Category"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br></br>
        <TextField label='Amount ( in $)' variant='standard'/><br></br><br></br>
        <TextField label='Discription' variant='standard'
         multiline
         rows={4}
         margin="normal" 
        /><br></br><br></br>
        <Button variant="contained" sx={{backgroundColor:'green'}}>Add</Button><br></br><br></br>
    </div>
    </div>
  )
}

export default Add