module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactUIAvatars',
      externals: {
        react: 'React'
      }
    }
  }
}
