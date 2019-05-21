// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.periodictable', {
    url: '/periodictable',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodictable.html'
      }
    }
  })

  .state('app.periodicgroupIA', {
    url: '/periodicgroupIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupIA.html'
      }
    }
  })

  .state('app.periodicgroupIIA', {
    url: '/periodicgroupIIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupIIA.html'
      }
    }
  })

  .state('app.periodicgroupIIIA', {
    url: '/periodicgroupIIIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupIIIA.html'
      }
    }
  })

  .state('app.periodicgroupIVA', {
    url: '/periodicgroupIVA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupIVA.html'
      }
    }
  })

  .state('app.periodicgroupVA', {
    url: '/periodicgroupVA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupVA.html'
      }
    }
  })

  .state('app.periodicgroupVIA', {
    url: '/periodicgroupVIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupVIA.html'
      }
    }
  })

  .state('app.periodicgroupVIIA', {
    url: '/periodicgroupVIIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupVIIA.html'
      }
    }
  })

  .state('app.periodicgroupVIIIA', {
    url: '/periodicgroupVIIIA',
    views: {
      'menuContent': {
        templateUrl: 'templates/periodicgroupVIIIA.html'
      }
    }
  })

  .state('app.hydrogen', {
    url: '/hydrogen',
    views: {
      'menuContent': {
        //templateUrl: 'templates/GroupaDetail/hydrogen.html'
        templateUrl: 'templates/hydrogen.html'
      }
    }
  })

  .state('app.Lithium', {
    url: '/Lithium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Lithium.html'
      }
    }
  })

  .state('app.Aluminium', {
    url: '/Aluminium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Aluminium.html'
      }
    }
  })

  .state('app.Antimony', {
    url: '/Antimony',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Antimony.html'
      }
    }
  })

  .state('app.Argon', {
    url: '/Argon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Argon.html'
      }
    }
  })

  .state('app.Arsenic', {
    url: '/Arsenic',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Arsenic.html'
      }
    }
  })

  .state('app.Astatine', {
    url: '/Astatine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Astatine.html'
      }
    }
  })

  .state('app.Barium', {
    url: '/Barium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Barium.html'
      }
    }
  })

  .state('app.Beryllium', {
    url: '/Beryllium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Beryllium.html'
      }
    }
  })

  .state('app.Bismuth', {
    url: '/Bismuth',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Bismuth.html'
      }
    }
  })

  .state('app.Boron', {
    url: '/Boron',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Boron.html'
      }
    }
  })

  .state('app.Bromine', {
    url: '/Bromine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Bromine.html'
      }
    }
  })

  .state('app.Caesium', {
    url: '/Caesium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Caesium.html'
      }
    }
  })

  .state('app.Calcium', {
    url: '/Calcium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Calcium.html'
      }
    }
  })

  .state('app.Carbon', {
    url: '/Carbon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Carbon.html'
      }
    }
  })

  .state('app.Chlorine', {
    url: '/Chlorine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Chlorine.html'
      }
    }
  })

  .state('app.Flerovium', {
    url: '/Flerovium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Flerovium.html'
      }
    }
  })

  .state('app.Fluorine', {
    url: '/Fluorine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Fluorine.html'
      }
    }
  })

  .state('app.Francium', {
    url: '/Francium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Francium.html'
      }
    }
  })

  .state('app.Gallium', {
    url: '/Gallium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Gallium.html'
      }
    }
  })

  .state('app.Germanium', {
    url: '/Germanium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Germanium.html'
      }
    }
  })

  .state('app.Helium', {
    url: '/Helium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Helium.html'
      }
    }
  })

  .state('app.Indium', {
    url: '/Indium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Indium.html'
      }
    }
  })

  .state('app.Iodine', {
    url: '/Iodine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Iodine.html'
      }
    }
  })

  .state('app.Lead', {
    url: '/Lead',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Lead.html'
      }
    }
  })

  .state('app.Krypton', {
    url: '/Krypton',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Krypton.html'
      }
    }
  })

  .state('app.Livermorium', {
    url: '/Livermorium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Livermorium.html'
      }
    }
  })

  .state('app.Magnesium', {
    url: '/Magnesium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Magnesium.html'
      }
    }
  })

  .state('app.Moscovium', {
    url: '/Moscovium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Moscovium.html'
      }
    }
  })

  .state('app.Neon', {
    url: '/Neon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Neon.html'
      }
    }
  })

  .state('app.Nihonium', {
    url: '/Nihonium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Nihonium.html'
      }
    }
  })

  .state('app.Nitrogen', {
    url: '/Nitrogen',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Nitrogen.html'
      }
    }
  })

  .state('app.Oganesson', {
    url: '/Oganesson',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Oganesson.html'
      }
    }
  })

  .state('app.Oxygen', {
    url: '/Oxygen',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Oxygen.html'
      }
    }
  })

  .state('app.Phosphorus', {
    url: '/Phosphorus',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Phosphorus.html'
      }
    }
  })

  .state('app.Polonium', {
    url: '/Polonium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Polonium.html'
      }
    }
  })

  .state('app.Potassium', {
    url: '/Potassium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Potassium.html'
      }
    }
  })

  .state('app.Radium', {
    url: '/Radium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Radium.html'
      }
    }
  })

  .state('app.Radon', {
    url: '/Radon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Radon.html'
      }
    }
  })

  .state('app.Rubidium', {
    url: '/Rubidium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Rubidium.html'
      }
    }
  })

  .state('app.Selenium', {
    url: '/Selenium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Selenium.html'
      }
    }
  })

  .state('app.Silicon', {
    url: '/Silicon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Silicon.html'
      }
    }
  })

  .state('app.Sodium', {
    url: '/Sodium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Sodium.html'
      }
    }
  })

  .state('app.Strontium', {
    url: '/Strontium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Strontium.html'
      }
    }
  })

  .state('app.Sulfur', {
    url: '/Sulfur',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Sulfur.html'
      }
    }
  })

  .state('app.Tellurium', {
    url: '/Tellurium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Tellurium.html'
      }
    }
  })

  .state('app.Tennessine', {
    url: '/Tennessine',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Tennessine.html'
      }
    }
  })

  .state('app.Thallium', {
    url: '/Thallium',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Thallium.html'
      }
    }
  })

  .state('app.Tin', {
    url: '/Tin',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Tin.html'
      }
    }
  })

  .state('app.Xenon', {
    url: '/Xenon',
    views: {
      'menuContent': {
        templateUrl: 'templates/GroupaDetail/Xenon.html'
      }
    }
  })

  .state('app.periodicgroupB', {
      url: '/periodicgroupB',
      views: {
        'menuContent': {
          templateUrl: 'templates/periodicgroupB.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/periodictable');
});
