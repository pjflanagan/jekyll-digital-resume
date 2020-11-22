

const G = {}

window.onload = function() {

  // initialize global variables
  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.canvas = new Canvas();
  G.SCROLL_END_Y = $('#content').offset().top;
  G.CONTENT_START_Y = G.SCROLL_END_Y - G.canvas.H;

  // events
  $('#scroll-down').click(() => {
    $('html,body').animate({
      scrollTop: G.SCROLL_END_Y
    }, 1800);
  });

  // $('.slide-personal .photo-link').hover(() => {
  //   console.log($(this).text());
  // });
  
  // initialize scroll point (in case refresh starts us lower on the page)
  const scroll = $(window).scrollTop();
  G.canvas.onScroll(scroll);
  // if($('#pix').width() >= 576) {
  //   G.scroll(scroll);
  //   $(document).scroll(() => {
  //     const scroll = $(window).scrollTop();
  //     G.scroll(scroll);
  //   });
  // }

}

// G.scroll = (scroll) => {
//   // scoll the content
//   $('#splash-title').css({transform: `translateY(${- G.canvas.H / 4 * (scroll/G.CONTENT_START_Y)}px)`})
//   if(scroll > G.CONTENT_START_Y) {
//     $('#pix').css({transform: `translateY(${- 0.1 * (scroll - G.CONTENT_START_Y)}px)`});
//   } else {
//     $('#pix').css({transform: `translateY(0px)`});
//   }
// }