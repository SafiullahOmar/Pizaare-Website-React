import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import  TiwiterIcon from '@mui/icons-material/Twitter';
import '../Style/Footer.css';

function Footer() {
  return (
    <div  className='footer'>
    <div className='socialMedia'>
    <InstagramIcon> </InstagramIcon><FacebookIcon/><TiwiterIcon/>
    </div>
        <a href='#'>&copy; 2023 omar.safiullah@gmail.com</a>
    </div>
  )
}

export default Footer
