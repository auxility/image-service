// PM2 START CONFIGURATION FILE

module.exports = {
  apps : [
    {
      name: "file-service",
      script: "./lib/index.js",
      watch: false,
      env: {
        "NODE_ENV": "production",
        "PORT": 2044
      }
    }
  ]
}
