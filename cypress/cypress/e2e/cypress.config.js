const { defineConfig } = require('cypress')

module.exports = defineConfig({
  waitForAnimations: false,
  animationDistanceThreshold: 50,
})