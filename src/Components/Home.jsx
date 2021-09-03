import React from 'react';
import "../styles/Home.css"

function Home() {
    return (
        <div className='Home'>
            <div className='home__body'>
                    <img className="home__image"
                    src='https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                    alt='splash'
                    />
            </div>

                <div className='home__para'>
                    <h1>Welcome to my space</h1>
                </div>
        </div>
    )
}

export default Home
