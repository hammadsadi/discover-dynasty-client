import PropTypes from "prop-types";
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
          <h1 className="mb-5 text-5xl font-bold dark:text-white">
            {heroData?.title}
          </h1>
          <p className="mb-5 dark:text-white">{heroData?.subtitle}</p>
          <button className="btn bg-color-primary border-color-primary text-white hover:bg-color-primary hover:bg-opacity-80 hover:border-color-primary">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroData: PropTypes.object,
};
export default Hero;
