var app = angular.module("app", []); 
app.controller("mainCtrl", mainCtrl); //This tells the controller the name of the function to run when it is needed
app.directive("avatar", avatarDirective); 

function mainCtrl ($scope) {
	console.log("Yeah");
	$scope.users = []; 
	$scope.addNew = function (user) {
		$scope.users.push({
			name: user.name, 
			avatarUrl: user.url
		});
		user.name = '';
		user.url ='';
	};
}

function avatarDirective() {
	return {
		scope: {
			user: "="
		},
		restrict: "E",
		template: (
			"<div class=\"avatar\">" +
			"<img ng-src=\"{{user.avatarUrl}}\"/>" +
			"<h4>{{user.name}}</h4>" +
			"</div>"
		), 
		link: link
	};

function link (scope) {
	if (!scope.user.avatarUrl) {
		scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
	}
}
}
