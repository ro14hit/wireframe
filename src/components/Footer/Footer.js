import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className = "nav" >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ></BottomNavigation>
        <div className = "center">All rights reserved with Eli Lilly</div>
    </Box>
  );
}
