import React from 'react';
import PropTypes from 'prop-types';
import querystring from 'querystring';

function removeUndefinedOrNull (obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined || obj[key] === null) delete obj[key];
  });

  return obj;
}

function UIAvatar ({ size, fontSize, length, name, rounded, background, color, uppercase, ...props }) {
  const query = querystring.stringify(removeUndefinedOrNull({
    size,
    'font-size': fontSize,
    length,
    name,
    rounded,
    background,
    color,
    uppercase
  }));

  return <img src={'https://ui-avatars.com/api/?' + query} alt={name} {...props} />;
}
UIAvatar.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number,
  length: PropTypes.number,
  name: PropTypes.string,
  rounded: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  uppercase: PropTypes.boolean
};
UIAvatar.settings = {};
UIAvatar.defaultProps = UIAvatar.settings;

export default UIAvatar;
