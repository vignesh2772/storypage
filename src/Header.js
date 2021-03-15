import React from 'react';
import logo from './assets/logo.png';
import footer from './assets/footer.png';
import discover from './assets/discover.png';
import navbar from './assets/navbar.png';
import rewind from "./assets/rewind.png";
import Covid19 from "./assets/Covid19.jpg";
import sellerstory from "./assets/seller story.jpg";
import bottomlink from "./assets/bottomlink.png";
import SocialFollow from "./SocialFollow";



function Header (){
    return( 

        <div  class="main"> 
    
            <div className="headerlogo" >
                <div className="medialogo">
                    <img src={logo} alt="logo" />
                </div>    
                <img src={navbar} alt="navbar" class="navimage"/>
                
            </div>
        <div className="fakeimg" style={{ height: 200 }}>Slideshow Image </div><br/>
        <div className="fakeimg" style={{ height: 200 }}>Flipkart seller story</div>
        <img src={sellerstory} alt="sellerstory" class="image"/>
        <hr/>2020 IN PREVIEW <hr/>
        <div className="fakeimg" style={{ height: 200 }}>2020 UNMASKED — FLIPKART’S STORYTELLERS TELL THEIR STORY</div>
        
        <div className="fakeimg" style={{ height: 200 }}>Slideshow Image</div><br/>
        <div className="fakeimg" style={{  height: 200 }}>COVID 19 <br/> UPDATE ON FLIPKART</div>
        <div class="wrapper">
         <button class="button">VIEW ALL</button>
        </div>
        <img src={Covid19} alt="covid19" class="image" style={{ padding: 10 }}/>
        <div class="wrapper">
         <button class="button">VIEW ALL</button>
        </div>
        <hr/>FLIPKART IMPACT <hr/>
        
        <img src={rewind} alt="rewind" class="image"/>
        <div className="fakeimg" style={{ height: 200 }}>2020 UNMASKED — FLIPKART’S STORYTELLERS TELL THEIR STORY</div>
        <hr/>CUSTOMERS FIRST <hr/>
        <img src={discover} alt="discover" class="image"/>
        <hr/>
        <img src={footer} alt="footer" class="image" />
        <img src={bottomlink} alt="bottomlink" class="bottomlink-image" />
        </div>
       
        
    )
}

export default Header;