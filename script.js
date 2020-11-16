

const G = {}

window.onload = function() {

  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.canvas = new Canvas();
  G.SCROLL_END_Y = $("#content").offset().top;
  G.SCROLL_START_Y = G.SCROLL_END_Y - G.canvas.H;


  $("#splash").click(function() {
    console.log('click');
    $('body').animate({
        scrollTop: G.SCROLL_END_Y
    }, 1200);
  });
  
  $(document).scroll(() => {
    const scroll = $(window).scrollTop();
    if(scroll > G.SCROLL_START_Y) {
      $('#pix').css({top: - 0.25 * (scroll - G.SCROLL_START_Y)});
    } else {
      $('#pix').css({top: 0});
    }
  });
}
