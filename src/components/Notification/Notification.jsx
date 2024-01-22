import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
