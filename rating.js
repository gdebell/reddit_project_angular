(function() {
  'use strict';

  var app = angular.module('redditCreatorApp')
  .controller('CreateRatingController', CreateRatingController)

  function CreateRatingController ($rootScope) {

    this.increaseRating = (shop) => {
      shop.rating ++;
      console.log(shop.rating);
      console.log(typeof shop.rating);
    }

    this.decreaseRating = (shop) => {
      shop.rating --;
    }

    $rootScope.showHide = true;

  }

})()


// Icons should be considered view-only elements that should not be used directly as buttons; instead nest a <md-icon> inside a md-button to add hover and click features.
//
