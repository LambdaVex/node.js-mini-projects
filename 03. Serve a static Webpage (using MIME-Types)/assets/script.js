$(document).ready(function(){
	$.scrollify({
		section : ".scrollifySection",
	});

	function getPortfolioDimensions(){
		var navHeight = $(".navbar-default").height();
		var pageHeight = $(window).height();
		var pageWidth = $(window).width();

		$("#portfolioItemsContainer").css({
			"margin-top": navHeight+"px",
			"height": (pageHeight-navHeight)+"px",
		});
		
		if (pageWidth > 1080) {
			$(".portfolioRow").css({
				"height": "33.33%"	
			});
			$(".rightPortfolioItem, .leftPortfolioItem").css({
				"width": "50%",
				"height": "100%"
			});
			$(".portfolioImg").css({
				"width": "33.33%",
				"height": "100%",
				"float": "left"
			});
			$(".portfolioText").css({
				"width": "66.66%",
				"height": "100%",
				"float": "right"
			});
		} else if (pageWidth > 536) {
			$(".portfolioRow").css({
				"height": "66.66%"
			});
			$(".rightPortfolioItem, .leftPortfolioItem").css({
				"width": "100%",
				"height": "50%"
			});
			$(".portfolioImg").css({
				"width": "33.33%",
				"height": "100%",
				"float": "left"
			});
			$(".portfolioText").css({
				"width": "66.66%",
				"height": "100%",
				"float": "right"
			});
		} else {
			$(".portfolioRow").css({
				"height": "100%"
			});
			$(".portfolioImg, .portfolioText").css({
				"width": "100%",
                "height": "50%",
                "float": "none"
			});
            $(".rightPortfolioItem, .leftPortfolioItem. .portfolioRow, #portfolio").css({
                "height": "auto"
            });
		}
		$.scrollify.update();
	}
	
	setTimeout(getPortfolioDimensions, 500);
	$("#name").click(function() {
		alert($(window).height());
	});
	
    $(window).resize(function(){
		getPortfolioDimensions();
    });
	
	$('#homeBtn').click(function(e){
		e.preventDefault();
		$.scrollify.move("#home");
		});
	$('#aboutBtn').click(function(e){
		e.preventDefault();
		$.scrollify.move("#about");
	});
	$('#portfolioBtn').click(function(e){
		e.preventDefault();
		$.scrollify.move("#portfolio");
	});
	$('#contactBtn').click(function(e){
		e.preventDefault();
		$.scrollify.move("#contact");
	});
});