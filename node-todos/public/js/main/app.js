var app = angular.module("app.todos", []);

app.controller("todoController", ['$scope', ($scope) => {
    $scope.appName = "Todo Dashboard";
    $scope.todos = [{
            text: "Khoi tao du an,include cac thu vien",
            isDone: true
        },
        {
            text: "cai dat app controller",
            isDone: true
        }, {
            text: "Tao service api, binding du lieu",
            isDone: false
        }, {
            text: "deploying len server: Heroku",
            isDone: false
        }
    ];
}]);