const Workout = require("../models/workout")

module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        // console.log(noteData);
        res.json(noteData);
    });


    app.post("/api/workouts", function (req, res) {
        console.log("POST");
        Workout.create({})
        .then(data=>res.json(data))
        .catch(err=>{
            console.log("err", err)
            res.json(err)
        })
       
    });

    app.put("/api/workouts/:id", function (req, res) {
        console.log("PUT",req.params, req.body);
        // Workout.create({})
        // .then(data=>res.json(data))
       
    });


}