(function ($) {
	"use strict";

	$('.owl-show-events').owlCarousel({
		items:4,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:4
			  }
		  }
	  })

	const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

	let countDown = new Date('Feb 29, 2088 09:30:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)

	$(function() {
        $("#tabs").tabs();
    });
	
	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

	mobileNav();

	window.sr = new scrollReveal();

	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	 $(window).on('load', function() {
		setTimeout(
			function() {$('#js-preloader').fadeOut("fast");}
			,0); 
    });

	(() => {
		const $triangles = document.querySelectorAll(".triangle");
		const template = `<svg class="triangle-svg" viewBox="0 0 140 141">
		  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<polygon class="triangle-polygon"  points="70 6 136 138 4 138"></polygon>
		  </g>
		</svg>`;
	  
		Array.prototype.forEach.call($triangles, ($triangle, index) => {
		  $triangle.innerHTML = template;
		});
	  })();
	  

	$(window).on('resize', function() {
		mobileNav();
	});


	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

})(window.jQuery);