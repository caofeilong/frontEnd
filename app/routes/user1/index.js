module.exports = {
  path: '/user',
  childRoutes: [{
    path: 'register',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Register.jsx'))
      })
    }
  }]
}
