# react-ui-avatars

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Wrapper component for https://ui-avatars.com

## Usage
```javascript
impoty ReactDOM from 'react-dom';
import React from 'react';
import UIAvatar from 'react-ui-avatars';

ReactDOM.render(
  <UIAvatar name='Warren Zevon' />,
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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
