import React from 'react';
import PropTypes from 'prop-types';

const DateFormatter = ({ value }) => <span>{new Date(value).toLocaleDateString('en-US')} </span>;

DateFormatter.propTypes = {
  value: PropTypes.number
};

export default DateFormatter;
