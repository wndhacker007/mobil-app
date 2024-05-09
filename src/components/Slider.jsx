import React, { useState } from 'react';
import first from '../assets/img/image.png';
import second from "../assets/img/image copy.png"
import third from "../assets/img/image copy 2.png"
import fourth from "../assets/img/image copy 3.png"
import left from "../assets/svg/left-2-svgrepo-com.svg";
import right from"../assets/svg/right-2-svgrepo-com.svg";
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: first,
      title: 'Spark',
      text: '$90',
    },
    {
      img: second,
      title: 'Blaze',
      text: '$100',
    },
    {
      img: third,
      title: 'Flame',
      text: '$110',
    },
    {
        img: fourth,
        title: 'Magic',
        text: '$75',
      }
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const navigate = useNavigate()

  return (
    <div className="slider" style={{ position: 'relative', width: '393px', height: '300px', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 393}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            style={{ width: '393px', height: '300px', textAlign: 'left'}}
          >
            <img onClick={() => navigate('/info')}
              src={slide.img}
              alt={slide.title}
              style={{ width: '393px', height: '200px' }}
            />
            <h3 style={
                {paddingLeft: "10px"}
            }>{slide.title}</h3>
            <p style={
                {paddingLeft: "10px"}
            }>{slide.text}</p>
            
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
        <img src={left} alt="" />
      </button>
      
      <button
        onClick={nextSlide}
        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        <img src={right} alt="" />
      </button>
    </div>
  );
};

export default Slider;
