import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header = () => {
  return (
    <>
     <Box >
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: "black" ,fontSize:25}}>
            Hacker news
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  )
}

export default Header