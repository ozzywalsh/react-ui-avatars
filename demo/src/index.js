import React, {Component} from 'react'
import {render} from 'react-dom'

import UIAvatar from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-ui-avatars Demo</h1>
      <UIAvatar />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
