import { resolve } from 'path'

export default function(moduleOptions) {
  const { nuxt } = this

  const options = {
    ... moduleOptions,
    ... this.options.nuxtHeadroom,
  }

  this.addPlugin({
    src: resolve(__dirname, './lib/plugin.js'),
    fileName: 'headroom.server.js',
  })

  this.nuxt.hook('components:dirs', dirs => {
    // Add ./components dir to the list
    dirs.push({
      path: resolve(__dirname, './components'),
      prefix: options.prefix
    })
  })
}

module.exports.meta = require('./package.json')
