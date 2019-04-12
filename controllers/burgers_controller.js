var express = require("express");
var router = express.Router();

var restaurant = require("../models/burger.js");



// Create all the routes and set up the logic within where required
router.get("/", function(req, res){
    restaurant.selectAll(function(data){
        var hbsObject = {
            restaurants: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/restaurants", function(req, res){
    restaurant.insertOne([
        "restaurant_name", "tried"
    ], [
        req.body.restaurant_name, req.body.tried
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/restaurants/:id", function(req, res){
    var condition = "id = " + req.params.id;

    restaurant.updateOne({
        tried: true
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;