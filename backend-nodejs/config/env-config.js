var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    // helpers = require('./helpers.js'),
    // rootPath = helpers.paths.root,
    env = process.env.NODE_ENV || 'debug',
    browserSync = process.env.browserSync || 'false',
    localIP = require('my-local-ip')();


var config = {
    root: rootPath,
    node_env: env,
    localIP: localIP,
    browserSync: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs-localhost'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    },

    localhost: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs-localhost'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    },

    development: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs-localhost'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    },

    debug: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs-debug'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    },

    staging: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs-staging'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    },

    production: {
        root: rootPath,
        app: {
            name: 'monsoon-nodejs'
        },
        port: process.env.PORT || 5000,
        node_env: env,
        localIP: localIP
    }
};
module.exports = config[env];
