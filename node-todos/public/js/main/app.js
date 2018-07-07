var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos', ($scope, svTodos) => {
    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.loading = true;

    $scope.todos = [];

    // load data from api 
    svTodos.get().then(function (res) {
        $scope.todos = res.data;
        $scope.loading = false;
    });

    $scope.createTodo = () => {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        // add to database
        svTodos.create(todo).then((res) => {
            $scope.todos = res.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });

        // this code is test add list in front-end
        // $scope.todos.push(todo);
        // $scope.formData.text = "";
    }

    $scope.updateTodo = (todo) => {
        console.log("update todo: ", todo);
        $scope.loading = true;
        svTodos.update(todo).then((res) => {
            $scope.todos = res.data;
            $scope.loading = false;
        });
    }

    $scope.deleteTodo = (todo) => {
        console.log("delete todo: ", todo);
        $scope.loading = true;
        svTodos.delete(todo._id).then((res) => {
            $scope.todos = res.data;
            $scope.loading = false;
        });
    }
}]);