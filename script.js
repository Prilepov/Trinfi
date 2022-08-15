/* Add/remove hexogen button */
const column = document.getElementById('column1');

document.querySelectorAll('.hexagon_cluster .hexagon').forEach(function(act) {
  act.addEventListener('click', function() {
    const hexclone = act.cloneNode(true);
    hexclone.addEventListener('click', function() {
      hexclone.remove();
      let but = document.createElement("div");
      but.innerHTML = "";
      column.insertBefore(but, column.lastChild);
    }, false);
    column.insertBefore(hexclone, column.firstChild);
    column.children[10].remove();
  }, false);
})

/* Tariff selection */
document.querySelectorAll('.choise_tariff').forEach(function(choise) {
  choise.addEventListener('click', function() {
    this.classList.toggle('choise_tariff_on');
    if (this.value == "Подключить") {
      this.value = "Отключить";
    } else {
      this.value = "Подключить";
    }
  }, false);
})

/* Slider-carousel */
$(".autoplay").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: "<img src='images/arrleft.png' class='prevar' alt='1'>",
  nextArrow: "<img src='images/arrright.png' class='nextar' alt='1'>",
});

/* Slider-carousel_corp_data */
$(".autoplay_corp_data").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: "<img src='images/arrleft.png' class='prevar' alt='1'>",
  nextArrow: "<img src='images/arrright.png' class='nextar' alt='1'>",
});


/* Pop-up */
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});