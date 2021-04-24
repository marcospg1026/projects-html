var main=function() {
    "use strict";
    $(".tabs a:nth-child(2)").on("click", function () { 

    // make all the tabs inactive 
    $(".tabs span").removeClass("active");

    // make the second tab active
    $(".tabs a:nth-child(2) span").addClass("active"); 

    // empty the main content so we can recreate it 
    $("main .content").empty(); 

    // do something with the data.. see Model3
    var toDos = ["study jquery",
         "watch capitan marvel",
         "finish all assignments",
         "Answer all emails",
         "cook spaghetti",
         "change the world"];

    // one loop forward
    $content = $("<ul>");
    for (i = 0; i <toDos.length; i++) {
                  $content.append($("<li>").text(toDos[i]));
                }
    $("main .content").append($content);

    // return false so we don't follow the link
    return false; 
}); 
$(".tabs a:nth-child(1)").on("click", function () {

    // make all the tabs inactive
    $(".tabs span").removeClass("active");

    // make the first  tab active
    $(".tabs a:nth-child(1) span").addClass("active");

    // empty the main content so we can recreate it
    $("main .content").empty();

    // one loop backwards
    $content = $("<ul>");
    for (i = 0; i <toDos.length; i--) {
                $content.append($("<li>").text(toDos[i]));
                }
    $("main .content").append($content);

    // return false so we don't follow the link
    return false;
});

    $(".tabs a:nth-child(3)").on("click", function () { 

    // make all the tabs inactive
    $(".tabs span").removeClass("active");

    // make the third  tab active
    $(".tabs a:nth-child(3) span").addClass("active"); 

    // empty the main content so we can recreate it 
    $("main .content").empty(); 

    // input a new to-do
    $input = $("<input>");
    $button = $("<button>").text("+");
     $button.on("click", function () {
    if ($input.val() !== "") {
            // push it the array
             toDos.push($input.val());
             $input.val("");
    }
    });
// it was here
var $content = $("<div>").append($input).append($button);
$("main .content").append($content); 
return false;
}); // it has to be here

};
$(document).ready(main);
        
