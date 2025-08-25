import "./Testimonials.scss";
import img_t from "../../assets/Frame (3).png";
import img_t__2 from "../../assets/img.svg";
import { ChevronsLeftRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="testimonials-wrapper__head">
            <h2>testimonials</h2>
            <p>Word on the street</p>
          </div>
          <div className="testimonials-wrapper__bottom">
            <div className="testimonials-wrapper__bottom-left">
              <img src={img_t} alt="testimonials__img" />
            </div>
            <div className="testimonials-wrapper__bottom-right">
              <img src={img_t__2} alt="testimonials__img" />
              <p>
                Jade helped us build a software so intuitive that it didn't need
                a walkthrough. He solved complex problems with brilliant design.
              </p>
              <div>
                <div>
                  <span>John Frankin</span>
                  <p>Founder, Double Bunch</p>
                </div>
                <button>
                  <ChevronsLeftRight className="te-btns" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
