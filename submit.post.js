(function() {
  'use strict';

  var app = angular.module('redditCreatorApp')
  .controller('CreateNewShopController', CreateNewShopController)
  .controller('SubmitNewShopController', SubmitNewShopController)



  function CreateNewShopController ($rootScope) {
    $rootScope.goForm = false
    this.displayHide = function (data) {
      if ($rootScope.goForm === false) {
        $rootScope.goForm = true;
      } else {
        $rootScope.goForm = false;
      }
    }

  }


  function SubmitNewShopController ($rootScope) {
    this.submitNew = function() {
      var newName = this.newShopForm.name;
      var newAuthor = this.newShopForm.author;
      var newUrl = this.newShopForm.url;
      var newDescription = this.newShopForm.description;

      $rootScope.shopsArray.push({
        name: newName,
        author: newAuthor,
        url: newUrl,
        description: newDescription
      })
      //console.log($rootScope.shopsArray);
    }

      $rootScope.goForm = true;
      this.displayHide = function (data) {
        if ($rootScope.goForm === false) {
          $rootScope.goForm = true;
        } else {
          $rootScope.goForm = false;
        }
      }
  }






})()
