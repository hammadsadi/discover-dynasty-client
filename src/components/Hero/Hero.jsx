import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const Hero = ({ heroData }) => {
  return (
    <div
      className="hero min-h-[calc(100vh-72px)] z-0"
      style={{
        backgroundImage: `url(${heroData?.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Fade direction="left">
            <h1 className="mb-5 text-5xl font-bold dark:text-white">
              {heroData?.title}
            </h1>
          </Fade>
          <Fade direction="left" delay={300}>
            <p className="mb-5 dark:text-white">{heroData?.subtitle}</p>
          </Fade>
          <Fade delay={400}>
            <button className="btn bg-color-primary border-color-primary text-white hover:bg-color-primary hover:bg-opacity-80 hover:border-color-primary">
              Explore
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroData: PropTypes.object,
};
export default Hero;
