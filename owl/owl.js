$(document).ready(function () {
	$('#top-songs').owlCarousel({
		loop: true,
		margin: 10,
		//add smartSpeed
		smartSpeed: 4000,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	//second owl
	$('#top-albums').owlCarousel({
		loop: true,
		margin: 10,
		//add smartSpeed
		smartSpeed: 4000,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});



	//change color of nav
	$('.owl-prev').html('<i class="fas fa-chevron-left"></i>');
	$('.owl-next').html('<i class="fas fa-chevron-right"></i>');
});
