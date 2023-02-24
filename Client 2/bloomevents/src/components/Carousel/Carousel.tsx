import image1 from "img/new/image6.jpg";
import image2 from "img/new/image10.jpg";
import image3 from "img/new/image14.jpg";
import image4 from "img/new/image7.jpg";
import image5 from "img/new/image12.jpg";

import "styles/Slider.css";

const Carousel = () => {
  const SliderImages = [image1, image2, image3, image4, image5];
  return (
    <div>
      <div id="slider">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        {SliderImages.map((p: any, i: number) => (
          <label htmlFor={"s" + (i + 1)} id={"slide" + (i + 1)}>
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
