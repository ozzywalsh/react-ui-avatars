import React, {Component} from 'react'
import _ from 'lodash';
import qs from 'qs';

class UIAvatar extends Component {
	/* Global settings object
	 * which can be set by the user of the component
	 * This can be overriden by passing props to individual instances
	 */
	static settings = {}

	static APIOptions = [
		'name',
		'size',
		'font-size',
		'length',
		'rounded',
		'background',
		'color',
		'uppercase',
	]


	getURL (settings) {
		const API_URL = 'https://ui-avatars.com/api/'
		const query = qs.stringify({...UIAvatar.settings, ...settings});

		const imageURL = `${API_URL}?${query}`

		return imageURL;
	}

	getSettings (props) {
		return _.pickBy(props, (value, key) => _.includes(UIAvatar.APIOptions, key));
	}

	getExtraProps (props) {
		return _.pickBy(props, (value, key) => !(_.includes(UIAvatar.APIOptions, key)));
	}

  render() {
		const imageURL = this.getURL(this.props);
		const extraProps = this.getExtraProps(this.props);

		return (
			<img src={imageURL} alt={this.props.name} {...extraProps} />
		);
  }
}

export default UIAvatar;
