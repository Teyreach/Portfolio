$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


  $('.thumbnail').hover(
        function(){
            $(this).find('.caption').animate({opacity: 0.8}, 400); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').animate({opacity: 0}, 400); //.fadeOut(205)
        }
    );

  $("button").hover(function(){
    $(".icon-bar").css("background-color", "#D38947");
    $(".navbar-default .navbar-toggle").css({"border": "1px solid #D38947", "background-color": "transparent"});
  },
      function(){
    $(".icon-bar").css("background-color", "#095057");
    $(".navbar-default .navbar-toggle").css({"border": "1px solid #095057", "background-color": "transparent"});
  });

});
$("#widget").localizationTool({
                       strings: {
                           "id:omnie" : {
 													 	pl_PL : "O MNIE"
													},
													 "id:kontakt" : {
 													 	pl_PL : "KONTAKT"
													},
													 "id:i" : {
 													 	pl_PL : "I"
													},
													"id:t" : {
													 pl_PL : "T"
												 },
												 "id:a" : {
													pl_PL : "A"
												},
												"id:m" : {
												 pl_PL : "M"
											 },
											 "id:exc" : {
												pl_PL : ""
											},
											"id:blank" : {
												pl_PL : ""
											},
											"id:omnie1" : {
												pl_PL : "Kilka słów o mnie..."
											},
											"id:tekst" : {
												pl_PL : "Cześć, Nazywam się Robert Koszela, moja przygoda z programowaniem zaczęła się 7 miesięcy temu. Od tamtego momentu codziennie wgłębiałem się w projektowanie stron internetowych i programowanie. W przyszłości chciałbym rozwijać się jako Front-End Developer. Codziennie uczę się czegoś nowego, aby nadążyć za trendami i najnowszymi technologiami."
											},
											"id:umiej" : {
												pl_PL : "Umiejętności:"
											},
											"id:narzedzia" : {
												pl_PL : "Narzędzia:"
											},
											"id:praca" : {
												pl_PL : "Moje projekty:"
											},
											"id:kontakt1" : {
												pl_PL : "KONTAKT"
											}
                    }
                  });
