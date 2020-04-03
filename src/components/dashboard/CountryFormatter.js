import React from 'react';
import PropTypes from 'prop-types';

import FlagIcon from '../common/FlagIcon';

const CountryFormatter = ({ value }) => (
  value && value.iso2 ? <FlagIcon code={value.iso2.toLowerCase()} size="2x" /> : <div></div>
);

CountryFormatter.propTypes = {
  value: PropTypes.shape({ iso2: PropTypes.string })
};

export default CountryFormatter;
