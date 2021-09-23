import React from 'react'
import Header from './componets/Header'
import './style.css'

function Home() {
    return (
        <div>
           <Header/>
            <main className="main">
                <div className="navbar">navBar</div>
                <div className="feed">feed</div>
            </main>
        </div>
    )
    
}

export default Home