
/*gallery*/
document.getElementById('links').onclick = function (event) {
	event = event || window.event;
	var target = event.target || event.srcElement,
		link = target.src ? target.parentNode : target,
		options = { index: link, event: event },
		links = this.getElementsByTagName('a');
	blueimp.Gallery(links, options);
};


/*scroll up*/
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});

/*menu*/
$(document).ready(function () {
	$(".btn-menu").click(function () {
		$(".modal").show()
	})
	$(".btn-close").click(function () {
		$(".modal").hide()
	})
});
