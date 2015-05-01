angular.module('simple-meteor-angular-famous',[
  'angular-meteor',
  'famous.angular'
]);

angular.module('simple-meteor-angular-famous')
  .controller('MafCtrl', function($scope){
    console.log("--> MafCtrl");
   
    $scope.myGridLayoutOptions = {
      dimensions: [3, 3]
    };
    
    $scope.list = [
      {content:"Very", bgColor: "#b58900", rotate: new famous.transitions.Transitionable(0)},
      {content:"Simple", bgColor: "#cb4b16", rotate: new famous.transitions.Transitionable(0)},
      {content: "Demo", bgColor: "#dc322f", rotate: new famous.transitions.Transitionable(0)},
      {content: "Meteor", bgColor: "#d33682", rotate: new famous.transitions.Transitionable(0)},
      {content: "Angular", bgColor: "#6c71c4", rotate: new famous.transitions.Transitionable(0)},
      {content: "Famous!", bgColor: "#268bd2", rotate: new famous.transitions.Transitionable(0)},
      {content: "Awesome", bgColor: "#118b22", rotate: new famous.transitions.Transitionable(0)},
      {content: "Cool", bgColor: "#8e8b42", rotate: new famous.transitions.Transitionable(0)},
      {content: "Combination", bgColor: "#af7b62", rotate: new famous.transitions.Transitionable(0)}
    ];
    
     $scope.animate = function() {
      for (var i = 0; i < $scope.list.length; i++) {
        $scope.list[i].rotate.set(Math.PI * 4, {curve: famous.transitions.Easing.inOutElastic, duration: 3000 * i}) 
      };
    };
 
    $scope.animate();

  });
  
function onReady() {
  angular.bootstrap(document, ['simple-meteor-angular-famous']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);

