module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","display":"minimal-ui","icon":"static/images/icons/favicon-32x32.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"325ba49f7822872aeeb0787ccdad8790"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
