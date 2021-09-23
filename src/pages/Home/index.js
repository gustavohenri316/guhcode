import React from 'react'
import Header from './componets/Header'
import { makeStyles } from '@material-ui/styles';
import NavBar from './componets/NavBar';
import Feed from './componets/Feed';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main:{
        height:'100vh',
        display:'flex',
        width:'1200px',
        margin:'0 auto',
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Header />
           <div className="toolbar"></div>
           <main className={classes.main}>
          <NavBar />
          <Feed />
             
            </main>
        </div>
    )
    
}

export default Home;