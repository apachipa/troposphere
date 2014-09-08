require.config({
  baseUrl: '/assets/js',
  paths: {
    // Path fallbacks syntax:
    // https://github.com/jrburke/requirejs/wiki/Upgrading-to-RequireJS-2.0#paths-fallbacks-
    //
    // jquery: [
    //    'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
    //    //If the CDN location fails, load from this location
    //    'lib/jquery'
    //]
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.8.6/core/amd/backbone.marionette.min',
    'backbone.wreqr': '//cdnjs.cloudflare.com/ajax/libs/backbone.wreqr/0.1.0/backbone.wreqr.min',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
    google: 'https://www.google.com/jsapi',
    bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min',
    react: '//cdnjs.cloudflare.com/ajax/libs/react/0.11.0/react-with-addons.min',
    chosen: '//cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.jquery.min',
    toastr: '//cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.2/js/toastr.min',
    q: '//cdnjs.cloudflare.com/ajax/libs/q.js/1.0.1/q.min',
    highchartsBase: '//code.highcharts.com/highcharts',
    highcharts: '//code.highcharts.com/highcharts-more',
    crypto: '//crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5',
    'jquery.dotdotdot': '//cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/1.6.10/jquery.dotdotdot.min',
    sinon: '//cdnjs.cloudflare.com/ajax/libs/sinon.js/1.7.3/sinon-min'
  },

  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    },

    bootstrap: {
      deps: ['jquery']
    },

    chosen: {
      deps: ['jquery']
    },

    highcharts: {
      deps: ['jquery', 'highchartsBase'],
      exports: 'Highcharts'
    },

    crypto: {
      exports: 'CryptoJS'
    },

    'jquery.dotdotdot': {
      deps: ['jquery']
    },

    sinon: {
      exports: 'sinon'
    }
  }
});