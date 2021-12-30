/*import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material/";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import { makeStyles } from '@mui/styles';
 

const useStyles = makeStyles(() => ({
typoStyle: {
    flex: 1
}
}));
 

function Header() {
    const classes = useStyles();
    return (
        <div>
           <AppBar position='static'>
               <Toolbar >
                   <Typography className={classes.typoStyle}>
                     MUI World  
                   </Typography>
                    <CastConnectedIcon />
                   </Toolbar>
           </AppBar>
        </div>
    )
}

export default Header;
