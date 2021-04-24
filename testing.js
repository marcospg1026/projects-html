var main=function() {
    "use strict";
    $('form').submit(function(event) {

    var obj={};
    obj.username=$('#username').val();
    obj.password=$('#password').val();

    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: obj,
        dataType: 'json',
        success: function(data){
            if(!data.success){
                if(data.errors.username){
                    $('.throw_error').fadeIn(1000).html(data.errors.username);
                }
            }
            else {
                 $('#success').fadeIn(1000).append('<p>'+data.posted+'</p>');
                 }
            }
    });

    event.preventDefault();
 if(!data.success){
                if(data.errors.username){
                    $('.throw_error').fadeIn(1000).html(data.errors.username);
                }
            }
            else {
                 $('#success').fadeIn(1000).append('<p>'+data.posted+'</p>');
                 }
            }

});
$(document).ready(main);

