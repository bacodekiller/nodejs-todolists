var Todos = require("../models/todoModel");

module.exports = (app) => {
    app.get("/api/setupTodos", (req, res) => {

        // setup seed data
        var seedTodos = [{
                text: "Hoc nodejs",
                isDone: false
            },
            {
                text: "Hoc angular",
                isDone: false
            },
            {
                text: "Viet 1 ung dung",
                isDone: false
            }
        ];

        Todos.create(seedTodos, (err, results) => {
            res.send(results);
        });
        
    });
}