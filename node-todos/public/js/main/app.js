var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', ($scope) => {
    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
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

    $scope.createTodo = () => {
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        $scope.todos.push(todo);
        $scope.formData.text = "";
    }

    $scope.updateTodo = (todo) => {
        console.log("update todo: ", todo);
    }

    $scope.deleteTodo = (todo) => {
        console.log("delete todo: ", todo);
    }
}]);