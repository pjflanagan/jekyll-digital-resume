

const G = {}

window.onload = function() {

  // initialize global variables
  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.canvas = new Canvas();
  G.SCROLL_END_Y = $("#content").offset().top;
  G.CONTENT_START_Y = G.SCROLL_END_Y - G.canvas.H;

  // events
  $("#scroll-down").click(() => {
    $('html,body').animate({
      scrollTop: G.SCROLL_END_Y
    }, 1800);
  });
  
  // initialize scroll point (in case refresh starts us lower on the page)
  const scroll = $(window).scrollTop();
  G.canvas.onScroll(scroll);
  if($('#pix').width() >= 576) {
    G.scroll(scroll);
    $(document).scroll(() => {
      const scroll = $(window).scrollTop();
      G.scroll(scroll);
    });
  }

}

G.scroll = (scroll) => {
  // scoll the content
  if(scroll > G.CONTENT_START_Y) {
    $('#pix').css({top: - 0.1 * (scroll - G.CONTENT_START_Y)});
  } else {
    $('#pix').css({top: 0});
  }
}