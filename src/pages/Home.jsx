import React from 'react'
import Navbars from '../components/Navbar/Navbars'
import Banner from '../components/Banner/Banner'
import Services from '../components/services/Services'
import Consult from '../components/Consult/Consult'

const Home = () => {
    return (
        <>
            <Navbars />
            <Banner/>
            <Services/>
            <Consult/>
        </>
    )
}

export default Home