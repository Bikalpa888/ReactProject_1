import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

const MyCarousel = () => {
  return (
   <>
   <Carousel>
                <div>
                    <img src="./1.jpg" />
                    <p className="legend">M3 Competition</p>
                </div>
                <div>
                    <img src="./2.jpg" />
                    <p className="legend">M3 f30</p>
                </div>
                <div>
                    <img src="./3.jpg" />
                    <p className="legend">M3 Comp G80 </p>
                </div>
            </Carousel>
   </>
  )
}

export default MyCarousel