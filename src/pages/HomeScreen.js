import React from 'react'
import '../styles/homeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../config/requests';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Navbar */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}

            <Row title="Trending" fetchURL={requests.fetchTrending} isLargeRow />
            <Row title="Netflix Originals" fetchURL={requests.fetchNetFlixOriginals}/>
            <Row title="Action" fetchURL={requests.fetchActionMovie}/>
            <Row title="Comedy" fetchURL={requests.fetchComedyMovie}/>
            <Row title="Documentries" fetchURL={requests.fetchDocumentries}/>
            <Row title="Horror" fetchURL={requests.fetchHorrorMovie}/>
            <Row title="Romantic" fetchURL={requests.fetchRomanticMovie}/>

        </div>
    )
}

export default HomeScreen
