$(document).ready(function(){
$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    infinite: true,
    cssEase: 'linear',
    speed:1000,
    vertical:true,
    autoplay:true,
    autoplaySpeed:2000,
    rows:2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
          rows:1
        }
      }
      
    ]

  });
});