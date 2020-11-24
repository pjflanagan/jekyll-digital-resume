

const G = {}

const INVENTIONS = [
  'What-if Machine',
  'Portal Gun',
  'Arc Reactor',
  'Bending Unit',
  'Smell-O-Scope',
  'Space Elevator',
  'Web Shooter',
  'Repulsor',
  'Microverse Battery',
  'Dyson Sphere'
];

const getRandomInvention = () => {
  const index = Math.floor(Math.random() * INVENTIONS.length);
  const invention = INVENTIONS[index];
  INVENTIONS.splice(index, 1);
  return invention;
};

window.onload = function() {

  // setup
  // initialize global variables
  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.canvas = new Canvas();
  G.SCROLL_END_Y = $('#content').offset().top;
  G.CONTENT_START_Y = G.SCROLL_END_Y - G.canvas.H;
  const scroll = $(window).scrollTop();
  G.canvas.onScroll(scroll);
  G.scroll(scroll);

  $('#blueprint-1').text(getRandomInvention());
  $('#blueprint-2').text(getRandomInvention());

  // events
  $('#scroll-down').click(() => {
    $('html,body').animate({
      scrollTop: G.SCROLL_END_Y
    }, 1800);
  });

  $(document).scroll(() => {
    const scroll = $(window).scrollTop();
    G.scroll(scroll);
  });

  // TODO: header links
  // $('#logo').click(() => {
  //   $('.header').removeClass('closed');
  //   $('.header').addClass('open');
  // })

  // $('.slide-personal .photo-link').hover(() => {
  //   console.log($(this).text());
  // });
  
  // initialize scroll point (in case refresh starts us lower on the page)
  // if($('#pix').width() >= 576) {
  // }
}

G.scroll = (scroll) => {
  // scoll the content
  $('#splash-title').css({transform: `translateY(${- G.canvas.H / 4 * (scroll/G.CONTENT_START_Y)}px)`})
  // if(scroll > G.CONTENT_START_Y) {
  //   $('#pix').css({transform: `translateY(${- 0.1 * (scroll - G.CONTENT_START_Y)}px)`});
  // } else {
  //   $('#pix').css({transform: `translateY(0px)`});
  // }
}