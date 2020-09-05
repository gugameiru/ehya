// Появление мобильного меню
var menuButton = $(".header-menu-button");
menuButton.on("click", function () {
	$(".header__mobile-menu-wrapper").addClass(
		"header__mobile-menu-wrapper--visible"
	);
});

// Закрытие мобильного окна
var closeButton = $(".header__mobile-menu-wrapper__close");
closeButton.on("click", function () {
	$(".header__mobile-menu-wrapper").removeClass(
		"header__mobile-menu-wrapper--visible"
	);
});

var closeContainer = $("section");
closeContainer.on("click", function () {
	$(".header__mobile-menu-wrapper").removeClass(
		"header__mobile-menu-wrapper--visible"
	);
});

// Подключение Swiper-slider к секции Testimonial
var mySwiper = new Swiper(".testimonial__swiper-container", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 7000,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
});
// Отключение автоперелистывания Swiper-slider Testimonial при наведении мышкой
var swiperContainer = document.querySelector(".testimonial__swiper-container");
swiperContainer.addEventListener("mouseenter", () => {
	mySwiper.autoplay.stop();
});
swiperContainer.addEventListener("mouseleave", () => {
	mySwiper.autoplay.start();
});

// Подключение Swiper Slider к секции Stories

var mySwiper2 = new Swiper(".stories__swiper-container", {
	// Optional parameters
	direction: "horizontal",

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Подключение управления Swiper Slider-ом секции Stories

var prevStoriesButton = document.querySelector(
	".stories__description-button__prev"
);
var nextStoriesButton = document.querySelector(
	".stories__description-button__next"
);

prevStoriesButton.addEventListener("click", () => {
	mySwiper2.slidePrev();

	if (mySwiper2.isBeginning == true) {
		$(prevStoriesButton).addClass("low-opacity");
		$(nextStoriesButton).removeClass("low-opacity");
	}
	if (mySwiper2.isBeginning == false && mySwiper.isEnd == false) {
		$(prevStoriesButton).removeClass("low-opacity");
		$(nextStoriesButton).removeClass("low-opacity");
	}
});
nextStoriesButton.addEventListener("click", () => {
	mySwiper2.slideNext();
	if (mySwiper2.isEnd == true) {
		$(nextStoriesButton).addClass("low-opacity");
		$(prevStoriesButton).removeClass("low-opacity");
	}
	if (mySwiper2.isEnd == false && mySwiper.isBeginning == false) {
		$(prevStoriesButton).removeClass("low-opacity");
		$(nextStoriesButton).removeClass("low-opacity");
	}
});

// Подключение табов блока Trending
$(document).ready(function () {
	var tabsItem = $(".trending-links__item");
	var contentItem = $(".trending__wrapper");

	tabsItem.on("click", function (event) {
		var activeContent = $(this).attr("data-target");
		console.log(activeContent);
		tabsItem.removeClass("trending-links__item--selected");
		contentItem.removeClass("trending__wrapper--active");
		$(activeContent).addClass("trending__wrapper--active");
		$(this).addClass("trending-links__item--selected");
	});
});

// Обработка формы отправки
$(".form").each(function () {
	$(this).validate({
		errorClass: "invalid",
		messages: {
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com",
			},
		},
	});
});

// Очистка форм при перезагрузке страницы
$("form").find("input").val("");
$("form").find("textarea").val("");
