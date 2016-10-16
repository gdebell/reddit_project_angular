(function() {
  'use strict';

  var app = angular.module('redditCreatorApp')
  .controller('CreateRatingController', CreateRatingController)

  function CreateRatingController ($rootScope) {

    this.increaseRating = (shop) => {
      shop.rating ++;
    }

    this.decreaseRating = (shop) => {
      shop.rating --;
    }
  }

})()
