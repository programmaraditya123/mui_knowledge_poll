import React, { useState } from 'react';
import './Footer.css';
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { AiFillApple } from "react-icons/ai";

const Footer = () => {
    const[showcat,setShowCat] = useState(0)
    // console.log(showcat,"+++++++++++++++")
  if (showcat === 0){
    return (
    <>
    <hr/>
    <div className='footer'>
    
    <div className='footer1'>
    <h1>Useful Links</h1>
    <div className='footerleft'>

    
    <div className='footer1.1'>
        <li>About</li>
        <li>Carrers</li>
        <li>Lead</li>
        <li>Value</li>
        <li>Blog</li>
        <li>Press</li>
    </div>
    <div className='footer1.2'>
        <li>Privacy</li>
        <li>Terms</li>
        <li>FAQs</li>
        <li>Security</li>
        <li>Mobile</li>
        <li>Contact</li>
    </div>
    <div className='footer1.3'>
        <li>Partner</li>
        <li>Franchise</li>
        <li>Seller</li>
        <li>Warehouse</li>
        <li>Sources</li>
        <li>Resource</li>
    </div>
    </div>
    </div>
    <div className='footer2'>
        <div className='footer21'>
            <h1>Categories</h1>
            <p onClick={(e)=>{setShowCat(1)}}>See all</p>
        </div>
        <div className='footerright'>
            <div className='footerright1'>
                <li>Python</li>
                <li>Javascript</li>
                <li>Recat</li>
                <li>Machine Learning</li>
                <li>Rust</li>
                <li>Golang</li>
                <li>Perl</li>
                <li>Deep learning</li>
                <li>generative AI</li>
                
            </div>
            <div className='footerright1'>
                <li>Python</li>
                <li>Javascript</li>
                <li>Recat</li>
                <li>Machine Learning</li>
                <li>Rust</li>
                <li>Golang</li>
                <li>Perl</li>
                <li>Deep learning</li>
                <li>generative AI</li>
            </div>
            <div className='footerright1'>
                <li>Python</li>
                <li>Javascript</li>
                <li>Recat</li>
                <li>Machine Learning</li>
                <li>Rust</li>
                <li>Golang</li>
                <li>Perl</li>
                <li>Deep learning</li>
                <li>generative AI</li>
            </div>
             
        </div>
    </div>
       
    </div>
    <div className='footerbottom'>
         <div className='bottom1'>
            {/* <p>Knowledge Pool education Private Ltd 2025-2035</p> */}
         </div>
         <div className='bottom1'>
            {/* <p>Download App</p> */}
            <li><FaGooglePlay/></li>
            <li>apple store</li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
            <li><SiGmail/></li>
            <li><FaInstagramSquare/></li>
            <li><FaFacebook/></li>
         </div>
    </div>
    <div className='footerlast'>
    <p>"Apna Store" is owned and managed by Preet Saini and Aditya Saini and is not related or interconnected with any other education application or platform.</p>
    </div>
    </>
    )
    }
    return (
        <>
        <hr/>
        <div className='footerexp'>
        <div className='footerexpanded'>
            <h1>Categories</h1>
            <p onClick={(e)=>{setShowCat(0)}}>Show less</p>
        </div>
        <div className='footercate'>
            <div className='footercat1'>
                <h2>Vegetable and Fruits</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Baby Care</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Print Store</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Books</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Beauty and Cosetmetics</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Dairy Products</h2>
                <div className='footercatlist'>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            <div className='footercat1'>
                <h2>Machine Learning</h2>
                <div className='footercatlist'>
                <li>Pandas</li>
                <li>Numpy</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Scikit Learn</li>
                <li>Guavava</li>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Guavava</li>
                </div>
            </div>
            
        </div>
        {/* <div className='footer1'>
    <h1>Useful Links</h1>
    <div className='footerleft'>

    
    <div className='footer1.1'>
        <li>About</li>
        <li>Carrers</li>
        <li>Lead</li>
        <li>Value</li>
        <li>Blog</li>
        <li>Press</li>
    </div>
    <div className='footer1.2'>
        <li>Privacy</li>
        <li>Terms</li>
        <li>FAQs</li>
        <li>Security</li>
        <li>Mobile</li>
        <li>Contact</li>
    </div>
    <div className='footer1.3'>
        <li>Partner</li>
        <li>Franchise</li>
        <li>Seller</li>
        <li>Warehouse</li>
        <li>Deliver</li>
        <li>Resource</li>
    </div>
    </div>
    </div> */}
        
        </div>
         
    <div className='footerbottom'>
         <div className='bottom1'>
            <p>Knowledge Pool education Private Ltd 2025-2035</p>
         </div>
         <div className='bottom1'>
            <p>Download App</p>
            <li><FaGooglePlay/></li>
            <li><AiFillApple /></li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
            <li><SiGmail/></li>
            <li><FaInstagramSquare/></li>
            <li><FaFacebook/></li>
         </div>
    </div>
    <div className='footerlast'>
    <p>"Knowledge pool" is owned and managed by Preet Saini Aditya Saini and is not related or interconnected with any other education platform or application.</p>
    </div>
    </>
    
  )
//   )
}

export default Footer;