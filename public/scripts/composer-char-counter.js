$(document).ready(function(){
  let counter = $("span.counter");

  $(".new-tweet").on('keyup', 'textarea', function(event){
    counter.text(140 - $(this).val().length);
    counter.toggleClass('negative', counter.text() < 0);
    // debugger;
    if (counter.text() < 0) {
      $('span.warning').text('Your tweet is too long!');
      $('span.warning').removeClass('hidden');
    } else {
      $('span.warning').addClass('hidden');
    }
  });
});
