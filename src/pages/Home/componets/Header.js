import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';

const useStyles = makeStyles ({
    appBar:{
        boxShadow: 'none',
    },
    img: {
        maxHeight:'55',
    },
    grow: {
        flexGrow: 1
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <img src="/images/logog.png" alt="logo" className={classes.img}/>
            <div className={classes.grow}></div>
            <div>
            <Button color='primary' variant='contained'>Novo Post</Button>
            <SvgIcon>
                <Bell></Bell>
            </SvgIcon>
            </div>
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