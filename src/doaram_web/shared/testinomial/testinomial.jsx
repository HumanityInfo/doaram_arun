import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
function Testinomial() {
  const options = {
    items: 2,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    margin: 8,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      }
  }
  };
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid  py-5 bgc-secondary webbody">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp txthome"
            data-wow-delay="0.1s"
          >
            <h1 className="txt-warning display-5 mb-5">
              What Others Say About Us
            </h1>
          </div>
          <div className="container-fluid yellow">
            <OwlCarousel
              className="owl-theme" {...options}
            >
              <div className="testimonial">
                <div className="pic">
                  <img src="img/team-1.jpg" alt="" />
                </div>
                <h4 className="testimonial-title">Blake - CSR Lead</h4>
                <div className="testimonial-review">
                  <p className="description">
                    "While we at DoAram had heard about various films, news
                    articles, and images about the fabulous work it does
                    tirelessly every day, visiting the schools and kitchens was
                    really an eye-opener and a highly recommended experience for
                    everyone."
                  </p>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src="img/team-2.jpg" alt="" />
                </div>
                <h4 className="testimonial-title">Buvan Atluri - CEO</h4>
                <div className="testimonial-review">
                  <p className="description">
                    "Hunger is not a natural disaster but man-made one to a
                    large extent. Hence, I feel, it is our duty to make India
                    hunger-free. It was pleasant to know about the
                    implementation of the Mid-Day Meal Programme."
                  </p>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src="img/team-3.jpg" alt="" />
                </div>
                <h4 className="testimonial-title">
                  Ranjan Sen - Managing Director
                </h4>
                <div className="testimonial-review">
                  <p className="description">
                    "We thank The DoAram for creating this wonderful platform
                    that we could trust, to provide scholarships to the bright
                    young children. We are very impressed with the process,
                    transparency and clarity the Foundation has exhibited. "
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Testinomial;
