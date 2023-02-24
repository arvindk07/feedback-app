import PropTypes from "prop-types";

const Header = ({ text }) => {
  return <div>{text}</div>;
};

Header.defaultProps = {
  text: "Feedback UI",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
