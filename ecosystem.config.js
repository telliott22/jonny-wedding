const pkg = require('./package')

module.exports = {
  apps: [
    {
      name: pkg.name,
      script: 'yarn',
      args: 'run start',
      max_memory_restart: '200M'
    }
  ]
}
