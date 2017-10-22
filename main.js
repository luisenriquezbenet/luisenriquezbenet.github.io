$(document).ready(function(){
    $('.up').hide();

    $(window).scroll(function(){
      if($(this).scrollTop() > 100 ){
          $('.up').fadeIn('500');
      } else {
        $('.up').fadeOut('500');
      }
    });
    $('.up').click(function(){
        $('body, html').animate({
            scrollTop: 0
        });
    });
});
