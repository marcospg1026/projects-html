var main=function(){ 
    "use strict";
    $(".comment-input button").on("click",function(event) {
        var $new_comment=$("</p>");
        var input=$(".comment-input input").val();

   // $(".comment-input2 button").on("click",function(event) {
        //var $new_comment2=$("</p>");
        //var input2=$(".comment-input2 input").val();

        $new_comment.text(input);
        $(".comments").append($new_comment);
//      $new_comment2.text(input2);
//      $(".comments").append($new_comment2);
    });

};
$(document).ready(main);

