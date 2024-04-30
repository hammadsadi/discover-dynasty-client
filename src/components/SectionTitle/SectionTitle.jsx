import { Fade } from "react-awesome-reveal";

import PropTypes from "prop-types";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-9 md:mb-12">
      <Fade>
        <h2 className="text-2xl font-extrabold  md:text-4xl dark:text-slate-50">
          {title}
        </h2>
      </Fade>
      <Fade delay={200}>
        <p className="pt-2 text-base max-w-lg mx-auto  dark:text-white">
          {subTitle}
        </p>
      </Fade>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionTitle;
