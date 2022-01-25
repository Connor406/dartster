const withTM = require("next-transpile-modules")(["@dartster/ui"])

module.exports = withTM({
  reactStrictMode: true,
})
