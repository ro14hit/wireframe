import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dtable from '../Table/Dtable'

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
           <span><TextField id="outlined-basic" label="Vendor Account Id" variant="outlined" /></span>
      <span><TextField id="outlined-basic" label="Vendor Admin Id" variant="outlined" /></span>
      <span><TextField id="outlined-basic" label="First Name" variant="outlined" /></span>
      <div><TextField id="outlined-basic" label="Last Name" variant="outlined" /></div>
      <div><Button variant="contained">Search</Button></div>
   
      <Dtable/>
  

      <span><Button variant="contained">Edit</Button></span>
      <span><Button variant="contained">Activate</Button></span>
      <span><Button variant="contained">Deactivate</Button></span>
      
      

      
      
    </Box>
  );
}