import "./Hero.scss";
import hero from "../../assets/IMAGE (7).png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-wrapper__left">
            <a href="#">I design products</a>
            <span>that delight and inspire people.</span>
            <p>
              Hi! I’m Jake, a product designer based in Berlin. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <div className="hero-wrapper__left-btns">
              <button className="hero__btn">Book a call</button>
              <button className="hero__btn">
                Download CV <ArrowRight />
              </button>
            </div>
          </div>
          <div className="hero-wrapper__right">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
