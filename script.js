

const G = {}

window.onload = function() {

  // initialize global variables
  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.canvas = new Canvas();
  G.SCROLL_END_Y = $("#content").offset().top;
  G.CONTENT_START_Y = G.SCROLL_END_Y - G.canvas.H;

  // initialize scroll point (in case refresh starts us lower on the page)
  const scroll = $(window).scrollTop();
  G.scroll(scroll);
  G.canvas.onScroll(scroll);

  // events
  $("#scroll-down").click(() => {
    $('html,body').animate({
      scrollTop: G.SCROLL_END_Y
    }, 1200);
  });
  
  $(document).scroll(() => {
    const scroll = $(window).scrollTop();
    G.scroll(scroll);
  });
}

G.scroll = (scroll) => {
  // scoll the content

  // $('#pix').css({top: - 0.1 * scroll});
  if(scroll > G.CONTENT_START_Y) {
    $('#pix').css({top: - 0.1 * (scroll - G.CONTENT_START_Y)});
  } else {
    $('#pix').css({top: 0});
  }

  // scroll the name logo
  // const headerIntersectsNameY = G.CONTENT_START_Y + G.canvas.H / 2 - 30;
  // if(scroll > headerIntersectsNameY) {
  //   const intersectionAmount = scroll - headerIntersectsNameY;
  //   $('.name-cover').css({
  //     height: `${intersectionAmount}px`,
  //     // marginTop: `${30-intersectionAmount}px`
  //   })
  // } else {
  //   $('.name-cover').css({
  //     height: '0px',
  //     // marginTop: '30px'
  //   })
  // }
}