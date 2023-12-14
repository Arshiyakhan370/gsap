// $(document).ready(function(){
// $('.testimonial-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows:false,
//     infinite: true,
//     cssEase: 'linear',
//     speed:1000,
//     vertical:true,
//     autoplay:true,
//     autoplaySpeed:2000,
//     rows:2,
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           vertical:false,
//           rows:1
//         }
//       }
      
//     ]

//   });
// });
gsap.set(".row, .row1", { y: "100" }); // Set initial position at the bottom

gsap.to(".row, .row1", {
  y: "-100%",
   ease: "linear",
    
   duration: 10,
   repeat: -1,
   repeatRefresh: false, // Ensure smooth repeat
});