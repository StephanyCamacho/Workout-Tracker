const Workout = require("../models/workout.js")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find().then (data => {
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    });


    app.post("/api/workouts", function (req, res) {
        console.log("POST");
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })

    });

    app.put("/api/workouts/:id", function (req, res) {
        console.log("PUT", req.params, req.body);
        // Workout.create({})
        // .then(data=>res.json(data))

    });


}