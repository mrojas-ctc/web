import React, { useEffect, useState } from "react";

import "./carousel.scss";

interface Props {
    children?: any;
    images?:any;
    className?: string;
}

const Carousel: React.FC<Props> = ({
  children,
  className,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselInfiniteScroll = () => {
    if (currentIndex === images?.length - 1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
  })

  return (
      <section className={`carousel__container ${className ? className : ""}`}>
        {images?.map((image:any, index:any) => (
          <img 
            src={image} 
            alt="" 
            className="carousel__item" 
            style={{transform: `translate(-${currentIndex * 100}%)`}}
            key={index}
          />
        ))}
      </section>
  );
};

export default Carousel;