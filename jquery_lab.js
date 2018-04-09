var liFirst = $('.main_menu_item:nth(0)');
var navHeight = $('.main_menu').innerHeight();
var mainMenu = $('.main_menu');
console.log(navHeight);
var scrollAboutMe = $('#aboutMe').offset().top-navHeight;
liFirst.click(function(){ $('body,html').animate(
	{scrollTop: scrollAboutMe}, 1000);
	liFirst.addClass('first_active');
    
})

$(window).scroll(function(){
    var fromTop = $(document).scrollTop();
	if(fromTop>=scrollAboutMe-navHeight)
		{
			liFirst.addClass('first_active');
		}
	

	if(fromTop<scrollAboutMe-navHeight)
		{
			liFirst.removeClass('first_active');
		}
}
				)

