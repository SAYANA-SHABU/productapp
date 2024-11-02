
import {  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ShareIcon from '@mui/icons-material/Share';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Homepg = () => {
var[pro,Setpro]=useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
.then((res)=>{
    Setpro(res.data)
    console.log(use)
})
})

const [value, setValue] = React.useState(0);
const [valu, setValu] = React.useState(0);
  return (
    <div>
         <br></br>
        <Grid container spacing={2}>
            
            {pro.map((valu)=>{
                
                        return( 
                           
                            <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              height="270"
                              image={valu.image}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h6" component="div" sx={{fontFamily:'Book Antiqua',backgroundColor:'gainsboro'}}>
                                {valu.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:'25px' ,fontFamily:'Book Antiqua'}}>
                               ${valu.price}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary',fontFamily:'Book Antiqua' }}>
                              category:{valu.category}
                              </Typography>

                            </CardContent>
                            <CardActions>
                            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <BottomNavigation
  showLabels
  valu={valu}
  onChange={(event, newValue) => {
    setValue(newValue);
  }} 
>

  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
</BottomNavigation>
                              
                              <ShareIcon/>&nbsp;&nbsp;&nbsp;
                              <ReadMoreIcon sx={{fontSize:'42px'}}/>
                            </CardActions >
                          </Card>
                          </Grid> 
                        )})}

           
        </Grid>

        <br></br>
<br></br>
        <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }} 
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
    </div>
  )
}

export default Homepg















// import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const Homepg = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []); // Fetch products once on mount

//   return (
//     <div>
//       <Grid container spacing={0}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={5} md={4} key={product.id}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={product.image}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Book Antiqua' }}>
//                   {product.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '25px', fontFamily: 'Book Antiqua' }}>
//                   ${product.price}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Book Antiqua' }}>
//                   Category: {product.category}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Homepg;
