// //Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//     ) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// (function($) {

	// "use strict";

	// $('nav .dropdown').hover(function(){
	// 	var $this = $(this);
	// 	$this.addClass('show');
	// 	$this.find('> a').attr('aria-expanded', true);
	// 	$this.find('.dropdown-menu').addClass('show');
	// }, function(){
	// 	var $this = $(this);
	// 		$this.removeClass('show');
	// 		$this.find('> a').attr('aria-expanded', false);
	// 		$this.find('.dropdown-menu').removeClass('show');
	// });

// })(jQuery);

$(document).ready(function () {
	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

	// Hàm active tab nào đó
	function activeTab(obj) {
		// Xóa class active tất cả các tab
		$('.tab-wrapper ul li').removeClass('active');

		// Thêm class active vòa tab đang click
		$(obj).addClass('active');

		// Lấy href của tab để show content tương ứng
		var id = $(obj).find('a').attr('href');

		// Ẩn hết nội dung các tab đang hiển thị
		$('.tab-item').hide();

		// Hiển thị nội dung của tab hiện tại
		$(id).show();
	}

	// Sự kiện click đổi tab
	$('.tab li').click(function () {
		activeTab(this);
		return false;
	});

	// Active tab đầu tiên khi trang web được chạy
	activeTab($('.tab li:first-child'));

	$('#switch-lang').css({'pointer-events':'none',
	 'cursor':'default'}).attr('disabled','disabled');
	
	$('[lang="vi"]').hide();

	$('#switch-lang-en').click(function (event) {
		$('[lang="vi"]').hide();
		$('[lang="en"]').show();
		});

	$('#switch-lang-vi').click(function (event) {
		$('[lang="vi"]').show();
		$('[lang="en"]').hide();
		});
});

$(function () {
	// Initially disable language switching button.
	// $('#switch-lang').css({'pointer-events':'none',
	//  'cursor':'default'}).attr('disabled','disabled');
	
	// $('[lang="vi"]').hide();

	// $('#switch-lang-en').click(function (event) {
	// 	$('[lang="vi"]').hide();
	// 	$('[lang="en"]').show();
	// 	});

	// $('#switch-lang-vi').click(function (event) {
	// 	$('[lang="vi"]').show();
	// 	$('[lang="en"]').hide();
	// 	});
  
	// function langButtonListen() {
	//   $('#switch-lang').click(function (event) {
	// 	event.preventDefault();
	// 	$('[lang="vi"]').toggle();
	// 	$('[lang="en"]').toggle();
	// 	// Switch cookie stored language.
	// 	if ($.cookie('lang') === 'en') {
	// 	  $.cookie('lang', 'vi', { expires: 7 });
	// 	} else {
	// 	  $.cookie('lang', 'en', { expires: 7 });
	// 	}
	//   });
	//   // Enable lang switching button.
	//   $('#switch-lang').css({'pointer-events':'auto',
	//    'cursor':'pointer'}).removeAttr('disabled');
	// }
  
	// Check if language cookie already exists.
	// if ($.cookie('lang')) {
	//   var lang = $.cookie('lang');
	//   if (lang === 'en') {
	// 	$('[lang="vi"]').hide();
	// 	langButtonListen();
	//   } else {
	// 	$('[lang="en"]').hide();
	// 	langButtonListen();
	//   }
	// }
  });