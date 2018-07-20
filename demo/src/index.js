import React, {Component} from 'react'
import {render} from 'react-dom'

import UIAvatar from '../../src'

UIAvatar.settings.rounded = true;

class Demo extends Component {
  render() {
		return (
			<div>
				<h1>react-ui-avatars Demo</h1>
				<UIAvatar 
					name='Mary Burke'
					color='#FF69B4'
				/>
			</div>
		);
  }
}

render(<Demo/>, document.querySelector('#demo'))
