function postmain(){
	// Код ниже будет вызываться после всех гонцов
	// (когда все эйчтиэмелины вставлены на места)

	$('.slider').slick({
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/content/slider/prev.svg" alt="prev arrow"></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/content/slider/next.svg" alt="next arrow"></button>',
		//отключат кнопки переключатели
		responsive:[
			{
				breakpoint:500,
				settings:{
					arrows:false
				}
			}
		]	
	});
}