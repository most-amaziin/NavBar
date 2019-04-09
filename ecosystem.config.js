module.exports = {
  apps: [{
    name: 'navBar',
    script: './server/index.js',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-222-193-186.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/nav-bar.pem',
      ref: 'origin/master',
      repo: 'https://github.com/threetexansandacanadian/NavBar.git',
      path: '/home/ubuntu/navBar',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
