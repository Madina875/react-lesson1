import "./Services.scss";
import img1 from "../../assets/IMAGE (2).svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-wrapper">
          <div className="services-wrapper__head">
            <h3>services</h3>
            <p>Design that solves problems, one product at a time.</p>
          </div>
          <div className="services-wrapper__bottom">
            <div className="services-cards">
              <div className="services-cards__card">
                <img src={img1} alt="card-img" />
                <h3>What I can do for you</h3>

                <p>
                  Faster, better products that your users love. Here's all the
                  services I provide:
                </p>
                <ul>
                  <li>Design Strategy</li>
                  <li>Web and Mobile app Design</li>
                  <li>Front-end Development</li>
                </ul>
              </div>{" "}
              <div className="services-cards__card">
                <img src={img1} alt="card-img" />
                <h3>What I can do for you</h3>

                <p>
                  Faster, better products that your users love. Here's all the
                  services I provide:
                </p>
                <ul>
                  <li>Design Strategy</li>
                  <li>Web and Mobile app Design</li>
                  <li>Front-end Development</li>
                </ul>
              </div>{" "}
              <div className="services-cards__card">
                <img src={img1} alt="card-img" />
                <h3>What I can do for you</h3>
                <p>
                  Faster, better products that your users love. Here's all the
                  services I provide:
                </p>
                <ul>
                  <li>Design Strategy</li>
                  <li>Web and Mobile app Design</li>
                  <li>Front-end Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
