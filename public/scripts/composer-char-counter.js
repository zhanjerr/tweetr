$.when($.ready).then(function(){

  $(".new-tweet").on('keyup', 'textarea', function(event){
    console.log($(this).parent().children('.counter').text(140 - $(this).val().length));
  });
});