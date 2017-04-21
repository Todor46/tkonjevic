$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

$( ".portofolioTrigger" ).click(function() {
  $( ".yellowSection" ).animate({
    left: "+=50%"
  }, 400, function() {
    $('.portofolio').animate({
      top: "-=100%"
    },400)
  });
});

$(".fa-times").click(function(){
  $('.portofolio').animate({
    top: "+=100%"
  },400,function (){
    $('.yellowSection').animate({
      left: "-=50%"
    },400)
  })
})
