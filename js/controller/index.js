'use strict';

var appName = "myxQuizIndex";
var app = angular.module(appName, [ "ui.bootstrap", "ngResource" ]);

/*******************************************************************************
 * index - indexコントローラ
 * 
 * @class
 * @name main
 * @memberOf angular-5o2x.js.controller
 ******************************************************************************/
app

.controller('index', [ '$scope', 'qFile', function($scope, qFile) {
  $scope.tableHead = [];
  $scope.tableContent = [];
  $scope.rounds = qFile.rounds;
  angular.forEach($scope.rounds, function(round){
	round.initialize = function(){
	  round.initialize0($scope);
	};
	round.callUp = function(){
	  round.callUp0($scope);
	};
  });
  
  $scope.initialize = qFile.initialize;
  $scope.twitterWindowOpen = qFile.twitterWindowOpen;
  $scope.openFolder = qFile.openFolder;
  
  $scope.openNameList = function() {
	qFile.openNameList($scope);
  }
  $scope.saveJsonFile = function() {
	qFile.saveJsonFile($scope);
  }
  $scope.cancelJsonFile = function() {
	qFile.cancelJsonFile($scope);
  }

} ]);
