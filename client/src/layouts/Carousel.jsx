import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import banner2 from "../assets/banner6.jpg";
import pic0 from "../assets/gallery/pic0.jpg";
import pic1 from "../assets/gallery/pic1.jpg";
import pic2 from "../assets/gallery/pic2.jpg";
import pic3 from "../assets/gallery/pic3.jpg";
import pic4 from "../assets/gallery/pic4.jpg";
import pic5 from "../assets/gallery/pic5.jpg";
import pic6 from "../assets/gallery/pic6.jpg";
import pic7 from "../assets/gallery/pic7.jpg";
import pic8 from "../assets/gallery/pic8.jpg";
import pic9 from "../assets/gallery/pic9.jpg";
import pic11 from "../assets/gallery/pic11.jpg";
import pic12 from "../assets/gallery/pic12.jpg";
import pic13 from "../assets/gallery/pic13.jpg";
import pic14 from "../assets/gallery/pic14.jpg";
import pic15 from "../assets/gallery/pic15.jpg";

const imageStyle = {
  width: "300px",
  height: "400px",
  borderRadius: "10px",
  border: "1px solid #FFFFFF33",
  objectFit: "cover",
};

function Carousel() {
  return (
    <div className="flex h-full bg-white">
      <div className="container max-w-screen-xl mx-auto overflow-x-hidden">
        <Splide
          options={{
            type: "loop",
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: true,
              speed: 1,
            },
            arrows: false,
            pagination: false,
            fixedWidth: "300px",
            gap: "2px",
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <img src={pic0} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic1} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic11} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic12} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic13} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic14} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic15} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic2} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic3} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic4} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic5} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic6} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic7} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic8} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={pic9} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={banner2} alt="Customer riding" style={imageStyle} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Carousel;
