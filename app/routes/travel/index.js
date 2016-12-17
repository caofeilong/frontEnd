module.exports = {
  path: 'travel',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Travel.jsx'))
    })
  }
}
