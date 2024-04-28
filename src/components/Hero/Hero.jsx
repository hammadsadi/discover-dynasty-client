const Hero = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-72px)] z-0"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold dark:text-white">
            Hello there
          </h1>
          <p className="mb-5 dark:text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-color-primary border-color-primary text-white hover:bg-color-primary hover:bg-opacity-80 hover:border-color-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
