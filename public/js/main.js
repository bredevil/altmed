$(document).ready(function () {

	/* Add Class JS
	------------------------------------------------------------------- */
	$('html').addClass('js');
	
	/* Initialization ANIMATE
	------------------------------------------------------------------- */
	new WOW().init();

	/* Click SLIDEMOVE
	------------------------------------------------------------------- */
	$(".scroll, .main_link, .arrow").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top  - 0 + "px"}, {duration: 700});
		return false;
	});

	/* Magic MENU
	------------------------------------------------------------------- */
	$(function() {
		'use strict';
		var leftPos, newWidth, $magicLine;
		$('.main_menu').append("<li id='magic-line'></li>");
		$magicLine = $('#magic-line');
		$magicLine.width($('.active').width())
		.css('left', $('.active a').position().left)
		.data('origLeft', $magicLine.position().left)
		.data('origWidth', $magicLine.width());
		$('.main_menu li a').click(function() {
			var $this = $(this);
			$this.parent().addClass('active').siblings().removeClass('active');
			$magicLine
			.data('origLeft', $this.position().left)
			.data('origWidth', $this.parent().width());
			return false;
		});

		$('.main_menu li').find('a').hover(function() {
			var $thisBar = $(this);
			leftPos = $thisBar.position().left;
			newWidth = $thisBar.parent().width();
			$magicLine.css({
				"left": leftPos,
				"width": newWidth
			});
			}, function() {
			$magicLine.css({
				"left": $magicLine.data('origLeft'),
				// "width": $magicLine.data('origWidth')
				"width": $magicLine.data('113px')
			});
		});
		var itemMenuWidth = $('ul.main_menu li').width();
		$('#magic-line').width(itemMenuWidth);
	});

	/* BUTTON UP
	------------------------------------------------------------------- */
	$(function() {
		$('.scroll_up').click(function() {
			$('html, body').animate({scrollTop: 0},500);
			return false;
		})
	})

	/* SCROLL UP + FIXED MENU
	------------------------------------------------------------------- */
	$('body').on('mousewheel', function(event) {
		// console.log(event.deltaY);
		if (event.deltaY > 0 && ($(window).scrollTop()>400)) {
			// $("header").addClass('fixed');
			console.log('addClass fixed | delta = ' + event.deltaY);
			// $('.header').addClass('fixed');
		}
		else {
			// $("header").removeClass('fixed');
			// $('.header').removeClass('fixed');
			console.log('removeClass fixed | delta = ' + event.deltaY);
		}
	});


	$(window).scroll(function() {
		if ($(this).scrollTop()>200){
			$("#header").addClass('show').removeClass('hide');     
			} else {
			$("#header").removeClass('show').addClass('hide');
		}
	});
















	/* GENERAL CAROUSEL
	------------------------------------------------------------------- */
	$("#general_slider").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		navigation: true,
		navigationText:false,
		pagination:true,
		addClassActive:true,
		paginationNumbers:true
	});
	// работа с главным слайдером на главной странице
	$('#general_slider').bind("DOMSubtreeModified",function(){
		var totalGeneralCarouselItems = parseInt($('#general_slider .owl-page:last-child .owl-numbers').text());
		var widthGeneralPagination = $('#general_slider .owl-pagination').width();
		$('#general_slider .owl-pagination .owl-page').width(widthGeneralPagination/totalGeneralCarouselItems);
	});

	/* CAROUSEL in Article
	------------------------------------------------------------------- */
	$(".slider_in_article").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		navigation: true,
		navigationText:false,
		pagination:true,
		addClassActive:true,
		paginationNumbers:true
	});
	// количество элеметов слайдеров в article
	var countCarouselItemsArticles = $('.slider_in_article').length;
	// цикл для расстановки уникального идентификатора каждому слайдеру article
	for (var i = 0; i <= countCarouselItemsArticles; i++) {
		var carousel_items_in_article = $('.slider_in_article')[i]; 
		$(carousel_items_in_article).addClass('slider_in_article' + i);
	};
	// работа со слайдерами в article
	$('.slider_in_article').bind("DOMSubtreeModified",function(){
		for (var i = 0; i <= countCarouselItems; i++) {
			var currentCarouselItem = parseInt($('.slider_in_article' + i + ' .owl-page.active .owl-numbers').text());
			var totalCarouselItems = parseInt($('.slider_in_article' + i + ' .owl-page:last-child .owl-numbers').text());
			var widthPagination = $('.slider_in_article' + i + ' .owl-pagination').width();
			$('.slider_in_article' + i + ' .owl-pagination .owl-page').width(widthPagination/totalCarouselItems);
			$('.slider_in_article' + i).closest('.block_slider').find('.currentSlide').text(currentCarouselItem);
			$('.slider_in_article' + i).closest('.block_slider').find('.totalSlide').text(totalCarouselItems);
		};
	});


	/*  CAROUSEL Items
	------------------------------------------------------------------- */
	$('.carousel_items').owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation: true,
		navigationText:false,
		pagination:true,
		addClassActive:true,
		paginationNumbers:true,
		scrollPerPage : true
	});


	// количество элеметов слайдеров
	var countCarouselItems = $('.carousel_items').length;
	// цикл для расстановки уникального идентификатора каждому слайдеру
	for (var i = 0; i <= countCarouselItems; i++) {
		var carousel_items = $('.carousel_items')[i]; 
		$(carousel_items).addClass('carousel_items' + i);
	};
	// Проверка на изменение DOM и пересчет пагинаторов для вывода + динамическая ширина пагинатора
	// работа с внутеннними слайдерами
	$('.carousel_items').bind("DOMSubtreeModified",function(){
		for (var i = 0; i <= countCarouselItems; i++) {
			var owl = $(".carousel_items" + i);
			var currentCarouselItem = parseInt($('.carousel_items' + i + ' .owl-page.active .owl-numbers').text());
			var totalCarouselItems = parseInt($('.carousel_items' + i + ' .owl-page:last-child .owl-numbers').text());
			var widthPagination = $('.carousel_items' + i + ' .owl-pagination').width();
			$('.carousel_items' + i + ' .owl-pagination .owl-page').width(widthPagination/totalCarouselItems);
			$('.carousel_items' + i).closest('.tabs_item').find('.currentSlide').text(currentCarouselItem);
			$('.carousel_items' + i).closest('.tabs_item').find('.totalSlide').text(totalCarouselItems);
		};
	});

	/* CUSTOM SELECTBOX
	------------------------------------------------------------------- */
	$("select").on("click" , function() {
		$(this).parent(".select-box").toggleClass("open");
	});

	$(document).mouseup(function (e){
		var container = $(".select-box");
		if (container.has(e.target).length === 0){
		container.removeClass("open");
	}
	});
	$("select").on("change" , function() {
		var selection = $(this).find("option:selected").text(),
			labelFor = $(this).attr("id"),
			label = $("[for='" + labelFor + "']");
		label.find(".label-desc").html(selection);
	});

	/* CUSTOM SCROLLBAR
	------------------------------------------------------------------- */
	$(".content").mCustomScrollbar({
		theme			: "dark",
		scrollButtons	: { scrollType: "stepped" },
		live			: "on"
	});

	$(".list_search").mCustomScrollbar({
		theme			: "dark",
		scrollButtons	: { scrollType: "stepped" },
		live			: "on"
	});

	/* CUSTOM RADIOBOX block CONSULT Adult/Child
	------------------------------------------------------------------- */
	$('.radio_consult').click(function(){});
	$('.tabs_consult_adult').fadeOut();
	$('#radio_consult1').click(function(){
		$('.tabs_consult_adult').fadeOut();
		$('.tabs_consult_child').fadeIn();
	});
	$('#radio_consult2').click(function(){
		$('.tabs_consult_child').fadeOut();
		$('.tabs_consult_adult').fadeIn();
	});

	/* CUSTOM RADIOBOX block SCHEDULT main/ult
	------------------------------------------------------------------- */
	$('.tabs_ultrasound_diagnosis').fadeOut();
	$('#radio_schedule1').click(function(){
		$('.tabs_ultrasound_diagnosis').fadeOut();
		$('.tabs_main_center').fadeIn();
	});
	$('#radio_schedule2').click(function(){
		$('.tabs_main_center').fadeOut();
		$('.tabs_ultrasound_diagnosis').fadeIn();
	});

	/* SHOW .wrap_search
	------------------------------------------------------------------- */
	$('.btn_search_icon').click(function(){
		$('.wrap_search').addClass('active');
		$('.wrap_search').fadeIn(500);
	});
	$('.wrap_search .btn_back').click(function(){
		$('.wrap_search').removeClass('active');
		$('.wrap_search').fadeOut(500);
	});	

	/* CHANGE .input_search
	------------------------------------------------------------------- */
	$('.input_search').change(function() {
		if($(this).val()!="") {
			$('.block_search .btn_search').addClass('active');
		}
		else {
			$('.block_search .btn_search').removeClass('active');
		}
	});
	$('.block_search .btn_search.active').click(function(){
		$('#input_search').val()=='';
	});


	/* PAGE SELECT DOCTOR
	------------------------------------------------------------------- */
	$('.block_select_specialists .list_specialists li').click(function(){
		$('.block_select_specialists .list_specialists li').removeClass('active');
		$(this).addClass('active');
	});

	$('.list_specialists').children("li").each(function(id_specialists, list_specialists){
		$(list_specialists).attr("data-item", id_specialists);
		id_specialists++;                        
	});
	$('.list_doctors').each(function(id_doctors, list_doctors){
		$(list_doctors).attr("data-item", id_doctors);
		id_doctors++;                        
	});

	// SHOW/HIDE info specialists
	$('.block_select_specialists .list_specialists li').click(function(){
		$('.text_info').fadeOut();
		$('.block_select_doctor .btn_more').fadeIn();
		var current_item = $(this).data('item');
		console.log('current_item => ', current_item);
		$('.block_select_doctor .list_doctors').hide();
		$('.block_select_doctor .list_doctors[data-item='+ current_item +']').show();
	});

	/* Footer block MAP
	------------------------------------------------------------------- */
	$('.footer .block_map .block_adresses li').click(function(){
		$('.footer .block_map .block_adresses li').removeClass('active');
		$('.footer .block_map .map').removeClass('active');
		$('.footer .block_map .map:first-child').css('display','none');
		$(this).addClass('active');
		var current_item = $(this).data('item');
		console.log('current_item => ', current_item);
		$('.footer .block_map .map[data-item='+ current_item +']').addClass('active');
	});
	// starting view map
	// $('.footer .block_map .map[data-item="0"]').addClass('active');

	$('.footer .block_map .block_adresses li').each(function(id_adress, list_adress){
		$(list_adress).attr("data-item", id_adress);
		id_adress++;                        
	});

	$('.footer .block_map').find(".map").each(function(id_map, list_maps){
		$(list_maps).attr("data-item", id_map);
		id_map++;                        
	});





	/* CUSTOM TABS
	------------------------------------------------------------------- */
	(function ($) { 
		$(function() {
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab.account ul.tabs').addClass('active').find('> li:eq(0)').removeClass('current');
			$('.tab ul.tabs li a').click(function (g) { 
				var tab = $(this).closest('.tab'), 
					index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut(200);
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn(200);
				g.preventDefault();
			} );
		});
	})(jQuery);

	/* CUSTOM FILTER TABS
	------------------------------------------------------------------- */
	$('.tab_filters').magnet({
		filter: '*'
	});

	/* ACTIVE adress
	------------------------------------------------------------------- */
	// $('.block .block_adresses .block_adress').click(function(){
	// 	$('.block .block_adresses .block_adress').removeClass('active');
	// 	$(this).addClass('active');
	// });

	/* ACTIVE footer adress
	------------------------------------------------------------------- */
	// $('.footer .block_map .block_adress').click(function(){
	// 	$('.footer .block_map .block_adress').removeClass('active');
	// 	$(this).addClass('active');
	// });

	/* ACTIVE doctor
	------------------------------------------------------------------- */
	$('.block_select_doctor .list_doctors li').click(function(){
		$('.block_select_doctor .list_doctors li').removeClass('active');
		$(this).addClass('active');
	});

	/* CUSTOM fileInput
	------------------------------------------------------------------- */
	$('#FileAttachment').change(function(){
		$('#fileuploadurl').val($('#FileAttachment').val());
	});

	$('.schedule_days .list_times li').click(function(){
		$('.schedule_days .list_times li').removeClass('active');
		$(this).addClass('active');
	});

});