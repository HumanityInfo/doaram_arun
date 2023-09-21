import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

function Joinus() {
    const options = {
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: "slideOutup",
        nav: false,
        dots: true,
        margin: 8,
        responsive:{
          0:{
              items:2
          },
          600:{
              items:5}
          }
      };
  return (
    <>
      <div className="container-xxl py-3">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp txthome "
            data-wow-delay="0.1s"
          >
            <h1>Join Us in Doing Aram for a Better World With</h1>
          </div>
          <div className="container-fluid">
            <OwlCarousel items={5} className="owl-theme" {...options}>
              <div className="item bg-white">
                <img src="imges/corp/29.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/30.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/31.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/32.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/33.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/34.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/35.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/36.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/37.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/38.png" alt="" />
              </div>

              <div className="item bg-white">
                <img src="imges/corp/39.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/40.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/41.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/42.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/43.png" alt="" />
              </div>

              <div className="item bg-white">
                <img src="imges/corp/44.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/45.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/46.png" alt="" />
              </div>
              <div className="item bg-white">
                <img src="imges/corp/47.png" alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinus;
