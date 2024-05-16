import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/misc/italian-man1.jpg';
import image2 from '../../assets/misc/italian-man2.jpg';
import image3 from '../../assets/misc/italian-man4.jpg';
import image4 from '../../assets/misc/italian-man5.jpg';
import image5 from '../../assets/misc/italian-man6.jpg';
import image6 from '../../assets/misc/italian-man7.jpg';
import image7 from '../../assets/misc/italian-man8.jpeg';
import image8 from '../../assets/misc/italian-man9.jpeg';
import image9 from '../../assets/misc/italian-man10.jpeg';
import image10 from '../../assets/misc/italian-man11.jpeg';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1}alt="Slide 1"></img>
        </div>
        <div>
          <img src={image2} alt="Slide 2" ></img>
        </div>
        <div>
          <img src={image3} alt="Slide 3" ></img>
        </div>
        <div>
          <img src={image4}alt="Slide 4"></img>
        </div>
        <div>
          <img src={image5} alt="Slide 5" ></img>
        </div>
        <div>
          <img src={image6} alt="Slide 6" ></img>
        </div>
        <div>
          <img src={image7} alt="Slide 7" ></img>
        </div>
        <div>
          <img src={image8}alt="Slide 8"></img>
        </div>
        <div>
          <img src={image9} alt="Slide 9" ></img>
        </div>
        <div>
          <img src={image10} alt="Slide 10" ></img>
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;