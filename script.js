import { generateKeyPair } from "crypto";

var myApp = angular.module("myAPp", []);

myApp.controller('myCOntroller',['$scope',function($scope){
    $scope.gmail = {
        username:"",
        email:""
    }
}]);

$scope.onGoogleSignIn=function(){
    var params = {
        'clientid':'1035169042249-taca4m0o66a59fl0i38jt5sge7f5tdjm.apps.googleusercontent.com',
        'cookiepolicy': 'single-host-origin',
        'callback':function(result){

        },
        'approvalprompt':'force',
        'scope':'https:://www.googleapis.com/auth/plus.login https:://www.googleapis.com/auth/plus.profile.emails.read'
    };

    gapi.auth.signIn(params);
}