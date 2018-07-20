import React, {Component} from 'react'
import qs from 'qs';

export default class extends Component {
	getURL (options) {
		const API_URL = 'https://ui-avatars.com/'
		const query = qs.parse(options);

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
