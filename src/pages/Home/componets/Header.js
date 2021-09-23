import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles ({
    appBar:{
        boxShadow: 'none',
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
           {/*<div>
                <span>GuhCode</span>
            </div>
            <div>
            <Button color='primary' variant='contained'>Novo Post</Button>
                <span>Img1</span>
                <span>Img1 </span>
           </div> */}
        </Toolbar>
    </AppBar>
    )
}
export default Header;