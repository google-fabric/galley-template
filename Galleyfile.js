// Symlink to this file from the root of your checked-out source repositories.

module.exports = {
  CONFIG: {
    // Sets the default registry when constructing image names out of service names. E.g. the
    // "demo" service will run the "galley/demo" image. Change this to your team’s registry.
    registry: 'galley',
  },

  'demo-mysql': {
    // Will use the "mysql" official image, regardless of the 'registry' value above
    image: 'mysql',
    // Mark your databases as 'stateful' to keep them from getting automatically recreated
    stateful: true,
    // mysql image has some useful runtime configuration options 
    env: {
      'MYSQL_ROOT_PASSWORD': 'swordfish',
      'MYSQL_DATABASE': 'demo_development',
      'MYSQL_USER': 'demo',
      'MYSQL_PASSWORD': 'demo'
    },
  },

  'demo': {
    // Makes the demo-mysql container apper as 'mysql' inside this container
    links: ['demo-mysql:mysql'],
    // Directory that the -s flag will map over
    source: '/code/demo',
    ports: {
      'dev': ['3000:3000'],
    },
  },
};
