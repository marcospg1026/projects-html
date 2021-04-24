var main=function() {
        "use strict";
        $(".generate-string button").on("click",function(event){

        var obj={};
        obj.length=$('#length').val();

 $.ajax({
        type: 'POST',
        url: '/generate',
        data: obj,
        dataType: 'json',
        success: function(data) {
                $("#the-string input").val(data); 
        }
        });

    event.preventDefault();
});
        $(".delete-string button").on("click",function(event) {
            $(".the-string").empty();
        });
};
$(document).ready(main);


