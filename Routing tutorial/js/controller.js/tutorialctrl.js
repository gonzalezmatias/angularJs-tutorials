angular.module('tutorialCtrlModule', [])

.controller('TutorialController', ['$scope', function($scope){ //scpoe is the data of the aplication, name parameter before passing
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Principal Title";
    $scope.tutorialObject.subTitle = "Some other ";
    $scope.tutorialObject.firstName = "First name";
    $scope.tutorialObject.lastName = "Last Name";
    $scope.tutorialObject.bindOutput = 2;

    $scope.timesTwo = function (){
        $scope.tutorialObject.bindOutput *= 2;

    }

}])


.directive("welcomeMessage", function(){
    return{
        restrict: "A",
        template: "<div> attr directive </div>"
    }
});