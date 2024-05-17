import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import image1 from '../../assets/banner1.png';
import image2 from '../../assets/banner2.jpg';
import image3 from '../../assets/banner3.png';
import './index.css';

const images = [image1, image2, image3]; // Import your image assets

const Header = () => {
  return (
    <div className="header-carousel">
      <Carousel controls={false}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={image} alt={`Slide ${idx + 1}`} />
            <div className="carousel-text-container">
              <div className="carousel-text">
                <div>
                  <p className="catbutton d-none d-md-block">ADVENTURE</p>
                </div>
                <h1 className="header-title">Richard Norton Photorealistic Rendering</h1>
                <div className="text-container">
                  
                  <div className='d-flex d-none d-md-block'>
                    <p className='p-2'>08.08.2021</p>
                    <p className='w-75'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Header;
