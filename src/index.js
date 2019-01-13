import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import qs from 'qs';

class UIAvatar extends Component {
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    'font-size': PropTypes.number,
    initialCharacters: PropTypes.number,
    rounded: PropTypes.bool,
    fontColor: PropTypes.string,
    uppercase: PropTypes.boolean
  }

  static settings = {}
  static defaultProps = this.settings;

  static APIOptions = [
    'name',
    'size',
    'font-size',
    'length',
    'rounded',
    'background',
    'color',
    'uppercase'
  ]

  getURL (settings) {
    const API_URL = 'https://ui-avatars.com/api/';
    const query = qs.stringify({ ...UIAvatar.settings, ...settings });

    const imageURL = `${API_URL}?${query}`;

    return imageURL;
  }

  getSettings (props) {
    return _.pickBy(props, (value, key) => _.includes(UIAvatar.APIOptions, key));
  }

  getExtraProps (props) {
    return _.pickBy(props, (value, key) => !(_.includes(UIAvatar.APIOptions, key)));
  }

  render () {
    const imageURL = this.getURL(this.props);

    return (
      <img src={imageURL} alt={this.props.name} {...this.props} />
    );
  }
}

export default UIAvatar;
