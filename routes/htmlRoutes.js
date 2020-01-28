
var path = require("path");

module.exports = function (app) {

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // app.get("./workout.js", function(req,res){
    //     res.sendFile(path.join(__dirname, "../public/workout.js"))
    // });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

    // app.get("./api.js", function(req,res){
    //     res.sendFile(path.join(__dirname, "../public/api.js"))
    // });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}