import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


 const Home = () => {
    return (
        <div>
         <Hero>
             <Banner title="Luxurious Rooms" subtitle="deluxe room start at &#x20a6;100,000">
                 <Link to="/rooms" className="btn-primary">Our rooms</Link>
             </Banner>
         </Hero>
         <Services/>
         <FeaturedRooms/>
        </div>
    )
}

export default Home