import React from 'react'
import './Styles.css'
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <p className='footer'>COPYRIGHT &#169; {year} JONATHAN VARGAS</p>
    )
}
export default Footer;