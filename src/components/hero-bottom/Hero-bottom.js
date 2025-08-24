import "./Hero-bottom.scss";
import image1 from "../../assets/IMAGE (8).png";
import image2 from "../../assets/IMAGE (9).png";
import image3 from "../../assets/IMAGE (10).png";
import image4 from "../../assets/IMAGE (11).png";

const Hero_bottom = () => {
  return (
    <section className="hero-bottom">
      <div className="container">
        <div className="hero-bottom-wrapper">
          <p>Trusted by</p>
          <div className="bottom-items">
            <img src={image1} alt="item" />
            <img src={image2} alt="item" />
            <img src={image3} alt="item" />
            <img src={image4} alt="item" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_bottom;
