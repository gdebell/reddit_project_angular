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

    $rootScope.showHide = true;

  }

})()

//
// <div ng-class='{highlight: 4 + 4 === 8}'> 4 + 4 = 8</div>

// Icons should be considered view-only elements that should not be used directly as buttons; instead nest a <md-icon> inside a md-button to add hover and click features.
// 
// <md-icon md-svg-src="icon.svg" style=" color: rgb(244,67,54)"></md-icon>
