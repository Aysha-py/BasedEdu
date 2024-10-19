import PropTypes from "prop-types";

function Heading({ header, text }) {
  return (
    <div>
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold">{header}</h3>
        <p className="text-[#7F938D] text-lg">{text}</p>
      </div>
    </div>
  );
}
Heading.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
