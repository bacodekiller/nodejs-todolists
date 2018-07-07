var app = angular.module("app.todos")

app.factory("svTodos", ["$http", ($http) => {
    return {
        get: () => {
            return $http.get("/api/todos");
        },
        create: (todoData) => {
            return $http.post("/api/todo", todoData);
        },
        update: (id, todoData) => {
            return $http.put("/api/todo/" + id, todoData);
        },
        delete: (id) => {
            return $http.delete("/api/todo/" + id);
        }
    }
}]);