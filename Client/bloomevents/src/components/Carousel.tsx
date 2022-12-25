import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import dance from 'img/dance.jpg';
import man from 'img/man.jpg';
import landing from 'img/landing.jpg';



function Carousel({imagerray}:any) {
    

    return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={3}
          interval={3000}
          isPlaying={true}
          infinite={true}
        //   isIntrinsicHeight={true}
        //   hasMasterSpinner={true}
        playDirection={'forward'}
        >
          
          <Slider>
            
            <Slide index={0}>
                <img src={dance} alt="" />
            </Slide>
            <Slide index={1}>
                <img src={man} alt="" />
            </Slide>
            <Slide index={2}>
                <img src={landing} alt="" />
            </Slide>
            
          </Slider>
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
      );
}

export default Carousel