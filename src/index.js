import React, {Component} from 'react'
import qs from 'qs';

class UIAvatar extends Component {
	static settings = {}

	getURL (options) {
		const API_URL = 'https://ui-avatars.com/api/'
		const query = qs.stringify({...UIAvatar.settings, ...options});

		const imageURL = `${API_URL}?${query}`

		return imageURL;
	}

  render() {
		const imageURL = this.getURL(this.props);

		return (
			<img src={imageURL} {...this.props} />
		);
  }
}

export default UIAvatar;
