

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
  'Dyson Sphere',
  'J.A.R.V.I.S.',
  'Shrink Ray',
  'Electron Carpet',
  'Mind Control Tie',
  'Memory Ray'
];

const getRandomInvention = () => {
  const index = Math.floor(Math.random() * INVENTIONS.length);
  const invention = INVENTIONS[index];
  INVENTIONS.splice(index, 1);
  return invention;
};

function setup() {

  // splash
  // TODO: canvas should take a scrollEnd point so it knows the ratio
  G.SCROLL_END_Y = $('#content').offset().top;
  G.canvas = new Canvas("pix", G.SCROLL_END_Y);
  G.CONTENT_START_Y = G.SCROLL_END_Y - G.canvas.H;
  const scroll = $(window).scrollTop();
  G.canvas.onScroll(scroll);
  pageScroll(scroll);

  $('#scroll-down').click(() => {
    $('html,body').animate({
      scrollTop: G.SCROLL_END_Y
    }, 1800);
  });

  $(document).scroll(() => {
    const scroll = $(window).scrollTop();
    pageScroll(scroll);
  });

  // personal
  G.targetInterval = setInterval(() => {
    const top = -40 + Math.random() * 50;
    const left = -40 + Math.random() * 80;
    const deg = Math.random() * 359;
    $('#bill').css({
      margin: `${top}% ${left}%`,
      transform: `rotate(${deg}deg)`
    });
  }, 2800);

  // projects
  $('#blueprint-1').text(getRandomInvention());
  $('#blueprint-2').text(getRandomInvention());

  // multipass
  const ageDifMs = Date.now() - new Date("August 11, 1996").getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  $("span#age").text(age);
  $('.slide-contact a').hover(() => {
    $('.multipass').addClass('light');
  }, () => {
    $('.multipass').removeClass('light');
  });
}


window.onload = function() {
  setup();

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

function pageScroll(scroll) {
  // scoll the content
  $('#splash-title').css({transform: `translateY(${- G.canvas.H / 4 * (scroll/G.CONTENT_START_Y)}px)`});
}