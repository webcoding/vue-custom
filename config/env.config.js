
// ENV

// var merge = require('webpack-merge')
import merge from 'webpack-merge'

// const evnList = 'dev,testing,prod'
// const isRightEnv = makeMap(evnList)
var prodEnv = {
  debug: false,
  port: 8001,
  name: 'prod',
  NODE_ENV: '"prod"',
  routerMode: 'history',
  social: {
    facebook: '',
    twitter: '',
    github: '',
  },
}

function createEnv(env) {
  if (env === 'prod') return prodEnv
  return merge({}, prodEnv, {
    debug: true,
    name: env,
    NODE_ENV: `"${env}"`,
    routerMode: 'hash',
  })
}

// const inputEnv = process.env.NODE_ENV

// if (isRightEnv(inputEnv)) {
//   new Error(inputEnv + '不是有效的环境变量，请选用' + evnList)
// }

// module.exports = {
export default {
  dev: createEnv('dev'),
  testing: createEnv('testing'),
  prod: createEnv('prod'),
}
