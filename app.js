var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // res.send("This will be the landing page sooon!");
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
         {name: "Granit Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
          {name: "Montain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"}
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
}); 

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});