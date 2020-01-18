
var path = require("path");

module.exports = function(app) {

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("./index.js", function(req,res){
        res.sendFile(path.join(__dirname, "/index.js"))
    });
    app.get("./workout.js", function(req,res){
        res.sendFile(path.join(__dirname, "../public/workout.js"))
    });

    app.get("./api.js", function(req,res){
        res.sendFile(path.join(__dirname, "../public/api.js"))
    });

    app.get("./style.css", function(req,res){
        res.sendFile(path.join(__dirname, "../public/styles.css"))
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/index.html"));
      });
}