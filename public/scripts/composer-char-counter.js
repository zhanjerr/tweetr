$.when($.ready).then(function(){

  $(".new-tweet").on('keyup', 'textarea', function(event){
    var counter = $(this).parent().children('.counter');
    counter.text(140 - $(this).val().length);
    counter.toggleClass('negative', counter.text() < 0)
  });
});