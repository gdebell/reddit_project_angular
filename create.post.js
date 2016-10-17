(function() {
  'use strict';

  var app = angular.module('redditCreatorApp')
  .controller('CreateContentController', CreateContentController)

  function CreateContentController ($rootScope) {
    $rootScope.id =1;

    $rootScope.shopsArray = [{
      id: $rootScope.id++,
      name: 'Sweet Cow Ice Cream',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 10,
      post_date: 'Monday at 9:00 PM',
      url: 'http://www.sweetcowicecream.com/wp-content/uploads/2016/03/MO_7720-Edit.jpg',
      comments: [{
        id: $rootScope.id++,
        username: 'Gina',
        comment: 'Best ice-cream shop in Denver!!'
      },
      {
        id: $rootScope.id++,
        username: 'Scott',
        comment: 'My girl friend is in LOVE with Sweet Cow!'
        }]
      }, {
    id: $rootScope.id++,
    name: 'High Point Creamery',
    author: 'Sam Smith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 9,
    post_date: 'Friday at 1:33 PM',
    url: 'http://images2.westword.com/imager/u/745xauto/6611522/dsc_7071.jpg',
    comments: [{
      username: 'Akiko',
      comment: 'The coconut ginger ice cream taste so good.'
      }]
    }, {
    id: $rootScope.id++,
    name: 'Little Man Ice Cream',
    author: 'Harry Pots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 7,
    post_date: 'Sunday at 6:15 PM',
    url: 'http://swoondivers.com/wp-content/uploads/2013/06/IMG_5434.jpg',
    comments: [{
      username: 'Sam',
      comment: 'The ice cream is tasty.'
      }]
    }]

    $rootScope.goComment = false;
    console.log($rootScope.goComment);
    this.showHide = (data) => {
      console.log('You hit the comment button!');
      //console.log($rootScope.shopsArray[0].comments[0].username);
      //console.log($rootScope.shopsArray[0].comments[0].comment);
      if ($rootScope.goComment === false) {
        $rootScope.goComment = true;
      } else {
        $rootScope.goComment = false;
      }
    }

  }

})()
