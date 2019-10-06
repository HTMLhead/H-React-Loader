module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'HRLoader',
      externals: {
        react: 'React'
      }
    }
  }
}
