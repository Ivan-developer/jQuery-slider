$(document).ready(function(){
	$('.slider').slick({
		arrows:true, // стрелки
		dots:true, // булиты, точки
		slidesToShow:3, // кол-во отображения 
		autoplay:true, //
		speed:1000, // скорость
		autoplaySpeed:800, // автоматически пролист слайдер
		responsive:[ // адаптивная на моб
			{
				breakpoint: 768, //
				settings: { //
					slidesToShow:2 // 
				}
			},
			{
				breakpoint: 550, //
				settings: { //
					slidesToShow:1 // 
				}
			}
		]
	});
});