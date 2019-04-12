$(function(){
    console.log("js file connected");

    $(".triedIt").on("click", function(event){
        console.log("clicked triedit");
        var id = $(this).data("id");
        
        var hasTried = {
            tried: true
        };

        $.ajax("/api/restaurants/" + id, {
            type: "PUT",
            data: hasTried
        }).then(
            function(){
                console.log("tried it!");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newRestaurant = {
            restaurant_name: $("#placeName").val().trim(),
            tried: false 
        };

        $.ajax("/api/restaurants", {
            type: "POST",
            data: newRestaurant
        }).then(
            function(){
                console.log("created new restaurant");
                location.reload();
            }
        );
    });
});