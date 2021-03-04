jQuery(document).ready(function($) {
  if (jQuery('[data-readmore]').length > 0) {
      jQuery('[data-readmore]').readmore({
          collapsedHeight: 309,
          moreLink: '<a href="#">Show More</a>',
          lessLink: '<a href="#">Show Less</a>'
      });
  }
  if (jQuery('[data-readmoreSec]').length > 0) {
      jQuery('[data-readmoreSec]').readmore({
          collapsedHeight: 266,
          moreLink: '<a href="#">Show More</a>',
          lessLink: '<a href="#">Show Less</a>'
      });
  }
  if (jQuery('[data-readmoret]').length > 0) {
    jQuery('[data-readmoret]').readmore({
        collapsedHeight: 570,
        moreLink: '<a href="#">Show More</a>',
        lessLink: '<a href="#">Show Less</a>'
    });
}
  //nav
  if ($(window).width() > 993) {
      $('[data-nav] > ul >li').hover(function() {
          $(this).each(function() {
              $('[data-nav] li').toggleClass('transp');
          });
          $(this).removeClass('transp');
      });
  }
  if ($(window).width() < 993) {
      $('[data-nav] .menu-item-has-children > a').click(function() {
          return false;
      })
  }
  if ($(window).width() < 769) {
      $('.footer__title').click(function() {
          $(this).parent().find('ul').toggleClass('open');
      })
  }
  // fixed header
  var body = jQuery('body');
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 40) {
          body.addClass("header_fixed");
      } else {
          body.removeClass("header_fixed");
      }
  });
  //tabs
  $('[data-tab]').on('click', function() {
    $('[data-table]').slick('unslick'); 
      $(this).addClass('active').siblings().removeClass('active').closest('.table__card').find('[data-table]').removeClass('active').eq($(this).index()).addClass('active');
      table ();
    });
  // team
  $('[data-team]').click(function() {
      $(this).toggleClass('open');
      $(this).find('.team__title').toggleClass('open');
      $(this).find('p').slideToggle(300);
  })
  //slider
  function table (){
    if (jQuery('[data-table]').length > 0) {
        $('[data-table]').slick({
            dots: false,
            speed: 300,
            arrows: false,
            slidesToShow: 4,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }, ]
        });
    }
  }
  table ();
  if (jQuery('[data-talk]').length > 0) {
    $('[data-talk]').slick({
        dots: true,
        appendDots: $('[data-line]'),
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        variableWidth: true
    });
}
var sliderItemsNum = $('[data-talk]').find('.slick-slide').not('.slick-cloned').length;
var dotWidth = $('[data-THelp]').width() / sliderItemsNum;
$('[data-line] ul li').css({
    'width': dotWidth
});
  
//   if (jQuery('[data-talk]').length > 0) {
//       $('[data-talk]').slick({
//           dots: true,
//           appendDots: $('[data-line]'),
//           speed: 300,
//           arrows: false,
//           slidesToShow: 4,
//           variableWidth: true
//       });
//   }
//   var sliderItemsNum = $('[data-talk]').find('.slick-slide').not('.slick-cloned').length;
//   var dotWidth = $('[data-THelp]').width() / sliderItemsNum;
//   $('[data-line] ul li').css({
//       'width': dotWidth
//   });
  // faq
  if (jQuery('[data-faq]').length > 0) {
      $('[data-faq]').click(function() {
          $(this).find('.faq__title').toggleClass('open');
          $(this).find('p').slideToggle(300);
      })
  }
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });
  //cookies
    var banner = $('[data-cookies]');
    var blockTime = localStorage.getItem('blockTime');
  if (blockTime !== null) {
    if (+new Date() >= parseInt(blockTime)) {
      localStorage.removeItem('blockTime');
    } else {
      banner.addClass('close');
    }
  }
  banner.find('.btn').click(function() {
    banner.addClass('close');
    // Устанавливаем время блокировки (текущее время + 1 час)
    localStorage.setItem('blockTime', +new Date() + (3600 * 1000));
  }); 

  // sticky sidebar
//   $(function() {
//       var sidebar = $("[data-side]");
//       if (sidebar.length > 0) {
//           var offset = sidebar.offset(),
//               topPadding = 150,
//               sectHeight = $("[data-blwrap]").height(),
//               headerHeight = $('[data-head]').height(),
//               sidebarHeight = sidebar.height();
//           $(window).scroll(function() {
//               if ($(window).scrollTop() + headerHeight > offset.top && (sectHeight - sidebarHeight) > $(window).scrollTop()) {
//                   sidebar.stop().animate({
//                       marginTop: $(window).scrollTop() - offset.top + topPadding
//                   });
//               }
//               if ($(window).scrollTop() + headerHeight < offset.top) {
//                   sidebar.stop().animate({
//                       marginTop: 0
//                   });
//               }
//               if ((headerHeight + sectHeight - sidebarHeight) <= $(window).scrollTop()) {
//                   sidebar.stop().animate({
//                       marginTop: sectHeight - sidebarHeight
//                   });
//               }
//           });
//       }
//   });
  // adaptive

});