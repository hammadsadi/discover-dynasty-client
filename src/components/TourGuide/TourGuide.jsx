import PropTypes from "prop-types";
const TourGuide = ({ tour }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      <img src={tour.image} alt="Shoes" className="w-full h-80 object-cover" />
      <div className="card-body text-center">
        <h2 className="card-title text-center mx-auto">{tour.name}</h2>
        <p className="font-medium">Tour Guide</p>
      </div>
    </div>
  );
};
TourGuide.propTypes = {
  tour: PropTypes.object,
};
export default TourGuide;
