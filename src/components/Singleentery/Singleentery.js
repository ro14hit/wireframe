import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Singleentery() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="User Id" variant="outlined" />
      <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
      <TextField id="outlined-basic" label="Role" variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />
      <TextField id="outlined-basic" label=".." variant="outlined" />

      <div><Button variant="contained">Add Single Personal / Add Vendor Account</Button></div>
      <span><Button variant="contained">Back</Button></span>
      <span><Button variant="contained">Reset</Button></span>
      
      
    </Box>
  );
}