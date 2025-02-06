function navOpenMobile(){
	if(!$(".header").hasClass("on")){
		$("nav").css("display", "block").animate({right: "0"}, 500);
    $(".header .dim").css("background", "rgba(0, 0, 0, 0.5)");
    $(".header").addClass("on");
    $("body").css({
        touchAction: "none",
        overflow: "hidden"
    });
	}else{
		$("nav").animate({right: "-55%"}, 500, function(){
			$("nav").css("display", "none");
			$(".header .dim").css("background", "rgba(0, 0, 0, 0)");
		});
		$(".header").removeClass("on");
        $("body").css({
			touchAction: "auto",
			overflow: "auto"
    	});
	}
};

// nav_mobile
$(document).on("click","#navBtnOpen",function(){
	navOpenMobile();
});
$(document).on("click",".header .dim",function(){
	navOpenMobile();
});
$(document).on("click",".header.on #menu li a",function(){
	navOpenMobile();
});

    
// intro swiper
const introSwiper = new Swiper(".introSlide .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    speed: 1000,
    loop: true,
    navigation: {
        prevEl: ".introSlide .prev",
        nextEl: ".introSlide .next",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    mousewheel: false,
});


// resize
$(window).resize(function(){
	if( window.innerWidth >= 700 ){
        $("nav").css("display", "block");
        $(".header").removeClass("on");
		$("body").css({ touchAction: "auto", overflow: "auto" });
        $("body").off("scroll touchmove mousewheel");
	}else if( window.innerWidth < 900 ){
        $("nav").css({ display: "none", right: "-55%" });
		$("body").css({ touchAction: "auto" });
	}
});


// scroll Animation
function scrollActive(){
    let sct = $(window).scrollTop();
	let winH = $(window).outerHeight();
	let cardT = $(".card").offset().top - (winH * 0.75);
	let customT = $(".custom").offset().top - (winH * 0.75);
	let footT = $(".footer").offset().top - (winH * 0.75);

    if(sct < 10) {
        $("#wrapper").addClass("sct");
    }else if(sct >= 10 && $("#wrapper").hasClass("sct")){
        $("#wrapper").removeClass("sct");
    }

    if($("#wrapper").hasClass("sct")){
		$(".card, .custom, .footer").removeClass("active");
	}
    if(sct > cardT && !$(".card").hasClass("active")){
		$(".card").addClass("active");
	}
    if(sct > customT && !$(".custom").hasClass("active")){
		$(".custom").addClass("active");
	}
    if(sct > footT && !$(".footer").hasClass("active")){
		$(".footer").addClass("active");
	}
}

scrollActive();
$(window).on("scroll", function() {
    scrollActive();
});


// contact form check
$(document).on("click", "#contactApply", function(){
	let mailChk = /^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_-]+)(\.[A-Za-z0-9_-]+){1,2}$/;
	if($("input[name=name]").val() == ""){
		alert("이름을 입력해 주세요.");
		$("input[name=name]").focus();
		return false;
	}else if(!mailChk.test($("input[name=mail]").val())){
		alert("이메일을 확인해주세요.");
		$("input[name=mail]").focus();
		return false;
	}else if($("textarea[name=memo]").val() == ""){
		alert("내용을 입력해 주세요.");
		$("textarea[name=memo]").focus();
		return false;
	}
});