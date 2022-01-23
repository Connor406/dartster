const withTM = require("next-transpile-modules")(["@dartster/ui"])

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_API_URL: process.env.BASE_API_URL,
    NEXT_PUBLIC_API_URL: process.env.API_URL,
  },
}

module.exports = withTM(nextConfig)
