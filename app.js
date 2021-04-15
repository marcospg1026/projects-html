var addCommentFromInputBox=function(){
//we are adding all the code in the same place to make it easier
        $(".comment-input button").on("click",function(event){
//will call to your function and detect a click on the button
                var $new_comment = $("<p>");
                var Input = $(".comment-input input").val();
                if (Input== ""){
//when the user tries to add something with no words it will pop a window alert
                        window.alert("Comment section is empty!");
                }
                else{
                        $new_comment.text(Input);
//else it will add the comment
                }
                $new_comment.hide();
                $(".comments").append($new_comment.fadeIn());
//this will add the new comment but fading in
                $(".comment-input input").val("");
//and it will clear the text box
        });

        $(".clear button").on("click", function (event){
//clear button that will detect a click and will clear the tex box
                $(".comment-input input").val("");
        });

        $(".remove button").on("click", function(event){
//remove button will remove all the comments that are already in the comment section(new + old)
                $("p").empty();
        });


        $(".comment-input input").on("clicks", function (event) {
//detects clicks being pressed and then if you want to add the comment you will have to hit the + button
                var $new_comment=$("<p>");
//assign the text from the textbox to the input section
                var Input=$(".comment-input input").val();
                if (Input== ""){
                        window.alert("Comment section is empty!");
                }
                else{
                        $new_comment.text(Input);
                }
                $new_comment.hide();
                $(".comments").append($new_comment.fadeIn());
                $(".comment-input input").val("");
        });
};
var main = function () { 
         "use strict";
         addCommentFromInputBox();
//will call the function above
};
$(document).ready(main);



