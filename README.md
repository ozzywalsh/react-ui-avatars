# react-ui-avatars

<!-- [![Travis][build-badge]][build] 
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
-->

Wrapper component for https://ui-avatars.com

Generate avatars from a users intials.

Credit to <a href="https://github.com/LasseRafn" target="_blank">@LasseRafn</a> for his awesome API.

## Demo
https://codepen.io/novigradian/pen/qMwJgg

## Installing
Using npm:

`npm install react-ui-avatars`

## Usage
```javascript
import ReactDOM from 'react-dom';
import React from 'react';
import UIAvatar from 'react-ui-avatars';

ReactDOM.render(
  <UIAvatar name='Warren Zevon' color='#551a8b' />,
  document.getElementById('#container')
);
```
## Options
Pass props same as  specified at https://ui-avatars.com.

Example:
```javascript
<UIAvatar name='Warren Zevon' size={128} />
```

Extra props are passed on to `<img />` element.

## Global Settings
Global settings for your app can be configured.
The properties are the same as the props.

The global settings can be overriden on an individual instance
of the component by passing the prop.
```javascript
import ReactDOM from 'react-dom';
import React from 'react';
import UIAvatar from 'react-ui-avatars';

UIAvatar.settings = {
  size: 128,
  rounded: true
};

ReactDOM.render(
  <UIAvatar name='Warren Zevon' />,
  document.getElementById('#container')
);
```

<!--
[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
-->
