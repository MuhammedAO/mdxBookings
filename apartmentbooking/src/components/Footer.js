import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return (
        <Fragment>
        <footer className="footer-container">
        <div className="container">
            <Link to="/">
                {/* <img src="./images/logo-white.svg" className="logo"/> */}
                <h5 className="logo">Logo here</h5>
            </Link>
                <h5 className="address">Fast Bookings or Enquiries? </h5>
                <p className="address">You can call us on +2347084748899</p>
                <ul className="footer-links">
                    <li><Link to=""><FaInstagram className="li-tag"/></Link></li> 
                </ul>
        </div>
        </footer>
        </Fragment>
    )
}
