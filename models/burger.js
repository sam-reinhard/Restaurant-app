var orm = require("../config/orm.js");

var restaurant = {
    selectAll: function(cb){
        orm.selectAll("restaurants", function(res){
            cb(res);
        });
    },

    insertOne: function(){

    },

    updateOne: function(){

    }
};

module.exports = restaurant;

