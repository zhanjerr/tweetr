$.when($.ready).then(function(){
  let counter = $("span.counter");

  $(".new-tweet").on('keydown', 'textarea', function(event){
    counter.text(140 - $(this).val().length);
    counter.toggleClass('negative', counter.text() < 0)
  });
});
