import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const TourGuide = ({ tour, idx }) => {
  return (
    <Fade direction="left" delay={idx * 300}>
      <div className="card bg-base-100 shadow-lg rounded-md">
        <img
          src={tour.image}
          alt="Shoes"
          className="w-full h-80 object-cover rounded-md"
        />
        <div className="card-body text-center">
          <h2 className="card-title text-center text-slate-200 mx-auto">
            {tour.name}
          </h2>
          <p className="font-medium">Tour Guide</p>
        </div>
      </div>
    </Fade>
  );
};
TourGuide.propTypes = {
  tour: PropTypes.object,
  idx: PropTypes.number,
};
export default TourGuide;
