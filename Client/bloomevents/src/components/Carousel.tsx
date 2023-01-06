import image1 from "img/bg_img.jpg";
import image2 from 'img/man.jpg';
import image3 from "img/parallax.jpg";
import image4 from "img/login.jpg";
import image5 from "img/dance.jpg";

import "styles/Slider.css";

const Carousel = () => {

const SliderImages=[image1, image2, image3, image4, image5]
  return (
    <div>       
        <div id="slider">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        {SliderImages.map((p:any,i:number)=>(
            <label htmlFor={"s"+(i+1)} id={"slide"+(i+1)}>
                <img
                src={p}
                alt="artwork"
                height="100%"
                width="100%"
                className="sliderImg"
                />
          </label>
        ))}
        </div>        
    </div>
  );
};

export default Carousel;