import React from 'react';
import PropTypes from 'prop-types';

const NumberFormatter = ({ value, column }) => (
  value ? <span style={{ color: column.name === 'deaths' ? 'red' : '' }}>{new Intl.NumberFormat().format(value)}</span> : <div></div>
);

NumberFormatter.propTypes = {
  value: PropTypes.shape({ iso2: PropTypes.string })
};

export default NumberFormatter;
