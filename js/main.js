var pickAChapter = ["#chapter1", "#chapter2", "#chapter3", "#chapter4", "#chapter5", "#chapter6", "#chapter7", "#chapter8"];
var chapterMarkers = [".chap1", ".chap2", ".chap3", ".chap4", ".chap5", ".chap6", ".chap7", ".chap8"];

$("document").ready(function(){
	
///////////
//START IT UP
///////////	

	$(window).on("scroll", function(){

		$(".scrollDown, .sticky").fadeOut(2500);
			$(".scrollDown").css({
				"-webkit-animation": "none",
				"-moz-animation": "none",
				"-ms-animation": "none",
			    "animation": "none"
		})

		if ($(window).scrollTop() >= "900") {
			$(".introPic").css({
				"position":"fixed",
				"top":"100px"
			});
			
			$(".chapters").delay(1000).css("left", "-40px");

		} else {
			$("#chapter1.introPic").css({
				"position":"relative"
			});
		}
 
		if (($("body").height()-$(window).height()) - $("body").scrollTop() <= "300") {
			//$("footer").removeClass("hidden")
			$("footer").slideDown(800);
		} else {
			//$("footer").addClass("hidden")
			$("footer").slideUp(400);
		}

	});

	$(".chapters").mouseover(function(){
		$(".chapters").css("left", "0");
	});
	
	$(".chapters").mouseout(function(){
		$(".chapters").css("left", "-40px");
	});
	
	$("li.chap1").attr("id", "current");

	$("nav").on("click", function(){
		$("ul.topMenu").slideToggle(400);
		$(".navburger div").toggleClass("activeNav");
		$(".tomato").toggleClass("rotateDown");
		$(".lettuce").toggleClass("rotateUp");
		$(".patty").toggleClass("goAway");
	});

///////////
//CLICK TO NEW CHAPTER FROM SIDEBAR
///////////

	//chapter refers to items in the left menu nav
	function switchChapters(chapter){	

		var i = 0;

		$(chapter).on("click", function(){

			i = $(this).index();
			
			$(pickAChapter[i]).siblings().removeClass("current").fadeOut(500);
			$(pickAChapter[i]).addClass("current").fadeIn(500, function(){
				$(window).scrollTop(0);
			});
			
			$(pickAChapter[i]).find(".introPic").css({
					"position":"fixed",
					"top":"100px"
				});

			$("#openingTitle").hide();

			if ($(pickAChapter[i]).hasClass("current")) {
				$(chapterMarkers[i]).attr("id", "current").siblings().removeAttr("id","current");
			}


		});
	}

	$(".chap1").on("click", switchChapters(".chap1"));
	$(".chap2").on("click", switchChapters(".chap2"));
	$(".chap3").on("click", switchChapters(".chap3"));
	$(".chap4").on("click", switchChapters(".chap4"));
	$(".chap5").on("click", switchChapters(".chap5"));
	$(".chap6").on("click", switchChapters(".chap6"));
	$(".chap7").on("click", switchChapters(".chap7"));
	$(".chap8").on("click", switchChapters(".chap8"));

///////////
//SHOW THE RIGHT NAV IN THE FOOTER
///////////

	$(window).on("scroll", function(){
		//if this chapter has class current
		if ($("#chapter1").hasClass("current")) {

			$(".moveOn.toCh2").show();
		} 

		else if ($("#chapter2").hasClass("current")) {

			//show corresponding to and from stuff
			$(".moveOn.toCh2").hide();
			$(".moveOn.toCh3, .moveBack.toCh1").show();
		}

		else if ($("#chapter3").hasClass("current")) {

			$(".moveOn.toCh3, .moveBack.toCh1").hide();
			$(".moveOn.toCh4, .moveBack.toCh2").show();
		}
		
		else if ($("#chapter4").hasClass("current")) {

			$(".moveOn.toCh4, .moveBack.toCh2").hide();
			$(".moveOn.toCh5, .moveBack.toCh3").show();
		}

		else if ($("#chapter5").hasClass("current")) {

			$(".moveOn.toCh5, .moveBack.toCh3, .moveOn.toCh2").hide();
			$(".moveOn.toCh6, .moveBack.toCh4").show();
		}

		else if ($("#chapter6").hasClass("current")) {

			$(".moveOn.toCh6, .moveBack.toCh4, .moveOn.toCh2").hide();
			$(".moveOn.toCh7, .moveBack.toCh5").show();
		}

		else if ($("#chapter7").hasClass("current")) {

			$(".moveOn.toCh7, .moveBack.toCh5, .moveOn.toCh2").hide();
			$(".moveOn.toCh8, .moveBack.toCh6").show();
		}

		else if ($("#chapter8").hasClass("current")) {

			$(".moveOn.toCh8, .moveBack.toCh6, .moveOn.toCh2").hide();
			$(".moveBack.toCh7").show();
			if ($("body").scrollTop() >= "2000") {
				$("#chapter8").find(".introPic img").attr("src", "img/KateAndWilli_crop.jpg")
				$(".introText").hide();
			} else {
				$("#chapter8").find(".introPic img").attr("src", "img/WilliStudy.jpg");
				$(".introText").show();
			}
		}
	});

///////////
//FOOTER NAV
///////////

	$(".toCh2").on("click", function(){
			
		$("#chapter2").siblings().removeClass("current").fadeOut(500);
		$("#chapter2").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter2").hasClass("current")) {
			$(".chap2").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh3").on("click", function(){
			
		$("#chapter3").siblings().removeClass("current").fadeOut(500);
		$("#chapter3").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter3").hasClass("current")) {
			$(".chap3").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh4").on("click", function(){
			
		$("#chapter4").siblings().removeClass("current").fadeOut(500);
		$("#chapter4").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter4").hasClass("current")) {
			$(".chap4").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh5").on("click", function(){
			
		$("#chapter5").siblings().removeClass("current").fadeOut(500);
		$("#chapter5").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter5").hasClass("current")) {
			$(".chap5").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh6").on("click", function(){
			
		$("#chapter6").siblings().removeClass("current").fadeOut(500);
		$("#chapter6").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter6").hasClass("current")) {
			$(".chap6").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh7").on("click", function(){
			
		$("#chapter7").siblings().removeClass("current").fadeOut(500);
		$("#chapter7").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter7").hasClass("current")) {
			$(".chap7").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

	$(".toCh8").on("click", function(){
			
		$("#chapter8").siblings().removeClass("current").fadeOut(500);
		$("#chapter8").addClass("current").fadeIn(500, function(){
			$(window).scrollTop(0);
		});

		if ($("#chapter8").hasClass("current")) {
			$(".chap8").attr("id", "current").siblings().removeAttr("id","current");
		}
	});

///////////
//HIDE MENU ON SCROLL//
///////////

	$(window).on("mousewheel",function(){
			$(".topMenu").slideUp(500);
			$(".navburger div").removeClass("activeNav");
			$(".tomato").removeClass("rotateDown");
			$(".lettuce").removeClass("rotateUp");
			$(".patty").removeClass("goAway");
		});

//////////
//NAV//
///////////
	$("#navBook").on("click", function(){
		$("#photos, #resources").fadeOut(800);
		$("#book").fadeIn(800);
		$(this).addClass("headerCurrent").siblings().removeClass("headerCurrent");
		$(window).scrollTop(0);
	});

	$("#navPhotos").on("click", function(){
		$("#book, #resources").fadeOut(800);
		$("#photos").fadeIn(800);
		$(this).addClass("headerCurrent").siblings().removeClass("headerCurrent");
		$(window).scrollTop(0);
	});

	$("#navResources").on("click", function(){
		$("#book, #photos").fadeOut(800);
		$("#resources").fadeIn(800);
		$(this).addClass("headerCurrent").siblings().removeClass("headerCurrent");
		$(window).scrollTop(0);
	});

///////////
//PHOTO CAPTIONS//
///////////
	$(".pic").mouseover(function(){
			$(this).find("div.caption").fadeIn(200);
		});

	$(".pic").mouseout(function(){
			$(this).find("div.caption").fadeOut(200);
		});

///////////
//PHOTO MENU SELECTIONS//
///////////

	$("#WilliPics").change(function() {
	    if(this.checked) {
	        $(".pic").hide();
	        $(".Willi").show();
	    } else {
	    	$(".pic").show();
	    }
	});

	$("#KatePics").change(function() {
	    if(this.checked) {
	        $(".pic").hide();
	        $(".Kate").show();
	    } else {
	    	$(".pic").show();
	    }
	});





});

