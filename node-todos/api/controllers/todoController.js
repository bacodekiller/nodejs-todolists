var Todos = require("../models/todoModel");

function getTodos(res) {
    Todos.find((err, todos) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(todos);
        }
    });
}

module.exports = (app) => {

    //get all todos
    app.get("/api/todos", (req, res) => {
        getTodos(res);
    });

    // get one todo: ex:api/todo/123
    app.get("/api/todo/:id", (req, res) => {
        Todos.findById({
            _id: req.params.id
        }, (err, todo) => {
            if (err) {
                throw err;
            } else {
                res.json(todo);
            }
        });
    });

    //create todo

    app.post("/api/todo", (req, res) => {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todos.create(todo, (err, todo) => {
            if (err) {
                throw err;
            } else {
                getTodos(res);
            }
        });
    });

    // update todo
    app.put("/api/todo", (req, res) => {
        if (!req.body.id) {
            return res.status(500).send("id id required");
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, (err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    getTodos(res);
                }
            });
        }
    });

    // delete a todo

    app.delete("/api/todo/:id", (req, res) => {
        Todos.remove({
            _id: req.params.id
        }, (err, todo) => {
            if (err) {
                return res.status(500).json(err);
            } else {
                getTodos(res);
            }
        });
    });
}