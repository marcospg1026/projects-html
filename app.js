var addCommentFromInputBox=function(){
        $(".comment-input button").on("click",function(event){
                var $new_comment = $("<p>");
                var Input = $(".comment-input input").val();
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

        $(".clear button").on("click", function (event){
                $(".comment-input input").val("");
        });

        $(".remove button").on("click", function(event){
                $("p").empty();
        });


        $(".comment-input input").on("clicks", function (event) {
                var $new_comment=$("<p>");
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
   };
$(document).ready(main);



