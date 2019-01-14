module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'UIAvatar',
      externals: {
        react: 'React'
      }
    }
  }
};
