import './app.css';
import Hearder from './Hearder';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Hearder/>
      <div>
        <div className='oneFirstBox'>
        <Carousel fade className='bigCarousel'>
  <Carousel.Item className='myCarousel'>
  <img
      className="d-block w-70 myImg"
      src="./image/banne-globe.png"
      alt="First slide"
    />
    <Carousel.Caption >
    <h1 className='myText'>Digital transformation</h1>
      <h2 className='myText'>is the new normal, connect globally through Digital Sevices</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='myCarouselTwo'>
  <img
      className="d-block w-30 myImg"
      alt="First slide"
      src='./image/home-landing-img.webp'
    />
    <Carousel.Caption>
      <h1 className='myText'>Transforming Customer Services</h1>
      <h2 className='myText'>Manage your Brand Reputation through Online Reputation Management</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className='twoFirstBox'>
          <h1>ADOPT DIGITAL, CONNECT GLOBALLY</h1>
          <p className='nomParagraph'>We assist you in overcoming your most difficult business difficulties.
          <br/>
          <br/>
As Your business needs changes, it is time to adopt digital product and services to 
overcome your business difficulties. Manage your employee’s data effectively to retain 
your most important asset, Human while manage your Brand reputation online to retain your customers.</p>
        </div>
        <br/>
        <br/>
        <div>
          <h1>WHY DIGITAL SO TRENDY?</h1>
          <br/>
          <br/>
          <div className='oneSecoundBox'>
            <div className='SecoundBox'>
            <img
      className="myImges"
      alt="First slide"
     src="./image/profit.png"
    />  
    <div>
              <p>COST EFFECTIVE</p>
              <br/>
              <p>Digital marketing is cost-effective for business. There is no other form of marketing you can use that cost a little amount of traditional marketing and gives greater results.</p>
            </div>
            </div>
            <div className='SecoundBox'>
            <img
      className="myImges"
      alt="First slide"
     src="./image/interactions.png"
    /> 
    <div>
              <p>CREATIVE, INTERACTIVE</p>
              <br/>
              <p>Digital Media give the opportunity of 2-way communications. As a marketer you can advertise your ads, where as your audience contribute with feedback and queries</p>
            </div>
            </div>
            <div className='SecoundBox'>
            <img
      className="myImges"
      alt="First slide"
     src="./image/global-network.png"
    /> 
    <div>     
      <p>WORLDWIDE REACH</p>
              <br/>
              <p>Nowadays everyone is on social media. Here Facebook, Instagram, Pinterest, Twitter, and Snapchat are some of the most popularly used social networks today. Almost 50% of people are on social media.</p>
            </div>
            </div>
            <div className='SecoundBox'>
            <img
      className=" myImges"
      alt="First slide"
     src="./image/interpretation.png"
    /> 
    <div>
            <p>EASY TO ANALYZE</p>
              <br/>
              <p>It takes a lot more than just looking at how your audience interact with your posts. Digital platform provides better tracking tools where you can monitor each and every activity of you campaign on social media.</p>
            </div>
            </div>
            <div className='SecoundBox'>
            <img
      className=" myImges"
      alt="First slide"
     src="./image/forbidden.png"
    /> 
    <div >
              <p>NO PHYSICAL LIMITS</p>
              <br/>
              <p>Digital Media give the opportunity of 2-way communications. As a marketer you can advertise your ads, where as your audience contribute with feedback and queries</p>
              </div> </div>
            <div className='SecoundBox'>
            <img
      className=" myImges"
      alt="First slide"
     src="./image/reputation.png"
    /> 
    <div>
              <p>INCREASED BRAND REPUTATION</p>
              <br/>
              <p>A Digital reputation is most important. As anything on social media is treated as a review and feedback about your brand. Digital media gives you a proper stage to interact with your audience and build your reputation.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='productAll'>
        <br/>
        <br/>
        <h1>Products & Services</h1>
        <br/>
        <br/>
        <div className='allImg'>
          <div className='oneAllImg'>
        <img
      className=" myImgs"
      src="./image/loco-viz.jpg"
      alt="First slide"
    />
    <h2>Digital Marketing & Services</h2>
    <p>Transforming Business
Choosing a Digital Media Services is one of the best ways to reach your 
prospects while maintaining a long-lasting relationship with your existing clients. 
As long as your business has a strong digital presence, your customers will always find you</p>
    </div>
    <div className='oneAllImg'>
      <img
      className=" myImgs"
      src="./image/businesswoman-1.jpg"
      alt="First slide"
    />
    <h2>Online Reputation Management</h2>
    <p>The Complete Customer Experience Management Suite
 Online Reputation Management is a new-generation digital customer 
 experience management platform that completely transforms your business 
 and helps build everlasting relationships with your customers like never before.</p>
    </div>
    </div>
{/*      <Carousel fade className='bigCarousel'>
  <Carousel.Item className='myProductCarousel'>
    <img
      className="d-block w-50 myImg"
      src="./image/loco-viz.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='myProductCarouselTwo'>
  <img
      className="d-block w-50 myImg"
      src="./image/businesswoman-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>*/}
      <br/>
      <br/>
      </div>
      <div>
      </div>
      <div className='footer'>
        <div className='footerOne'>
        <img
      className="myImgLogo"
      src="./image/Lagosmart-Logo.png"
      alt="First slide"
    />
    <br/>
    <br/>
          <p>Lagosmart Is A Business Solutions Company Providing Web Based Services. Lagosmart Is Supported By Industry Experts And Having Its Expertise In Ecommerce Solutions, Server Management, Web Based Solution And Services, Digital Marketing Services – SEO, SEM, SMO, Social Media Marketing, Brand Building Etc.</p>
        </div>
        <div className='footerOne'>
          <p></p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>VHRMS</li>
            <li>VPay</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footerOne'>
          <p></p>
          <div className='inputItems'>
          <input type='text' className='inputClass'/>
          <div className='inputButton'></div>
          </div>
          <br/>
          <p>7b Regina Omolara St, Opebi, Ikeja, Lagos</p>
          <p>digital@lagosmart.net</p>
          <p>+234 815 735 3535</p>
          <p>+234 815 735 3535</p>
        </div>
      </div>
      <div className='footerTwo'>
        <p>Copyright © 2022 LagoSmart Networks Limited. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
