const withTM = require("next-transpile-modules")(["@dartster/ui"])
const path = require("path")

const nextConfig = {
  env: {
    NEXT_PUBLIC_DART_ENV: process.env.DART_ENV,
    NEXT_PUBLIC_API_URL: process.env.API_URL,
  },
  enableSvg: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    config.resolve.alias["@"] = path.resolve(__dirname)
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          use: ["@svgr/webpack"],
        },
      ],
      issuer: {
        and: [/\.jsx?$/],
      },
    })
    return config
  },
}

module.exports = withTM(nextConfig)
