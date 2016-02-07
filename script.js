var app = angular.module("app", []); 
app.controller("mainCtrl", mainCtrl); //This tells the controller the name of the function to run when it is needed
app.directive("avatar", avatarDirective); 
var counter = 0; 
function mainCtrl ($scope) {
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

$("#add-button").on("click", function() {
	counter++;
	console.log(counter);
	if (counter == 6)
	{
		console.log("We made it in here");
		$(".user-list").append("</tr ng-repeat=\"user in users\"><tr>");
	}
});
