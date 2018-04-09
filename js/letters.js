$(document).ready(function () {
  /*
   * Main variables
   */
	var frombottom = 0;
	var scroll1 = 0;
	var scroll2 = 0;
	var scroll3 = 0;
	var scroll4 = 0;
	var scroll5 = 0;
	var scroll6 = 0;


	var content = [{
		title: "Parduodamas produktas #1",
		desc: "Trumpas parduodamo produkto aprašymas (1)"
	}, {
		title: "Siūloma paslauga #2",
		desc: "Trumpas aprašymas. Lorem ipsum dolor sit amet consectetur. (2)"
	}, {
		title: "Parduodamas produktas #3",
		desc: "Dar vienas aprašymas. Lorem ipsum dolor sit amet. (3)"
	}, {
		title: "Siūloma paslauga #4",
		desc: "Siūlomos paslaugos aprašymas. (4)"
	}, {
		title: "Parduodamas produktas #5",
		desc: "Dar vienas trumpas produkto aprašymas. (5)"
	}, {
		title: "Siūloma paslauga #6",
		desc: "Paskutinės siūlomos paslaugos trumpas aprašymas. (6)"
	}];
	//  {
	//   title: "Manau, siam kartui uzteks",
	//   desc: "Iki pasimatymo sekanciuose projektuose!"
	// }, {
	//   title: "Viso gero!",
	//   desc: "<i>Iki! :) </i>"
	// }




	//debug
	//console.log("document loaded " + window.innerHeight + "px");
	// var adjustedheight = window.innerHeight * (content.length * 3);
	var adjustedheight = window.innerHeight * 18;
	$(".about-wrapper").css({
		height: adjustedheight + "px"
	})


	$(window).scroll(function () {

		var windowHeight = window.innerHeight;
		var windowScrollTop = $(this).scrollTop();

		//debug
		//console.log("windowheight: " + windowHeight);
		//console.log("window scrolled: " + windowScrollTop);


		if ((windowScrollTop + 15) >= windowHeight && windowScrollTop <= (adjustedheight + (windowHeight / 4))) {
			$("#soupwrapper").addClass("floater");
			$(".floater").css({
				height: windowHeight + "px"
			}).fadeIn('slow');
			$("#soup-container").css({
				height: windowHeight + "px"
			}).fadeIn('slow');

			if (windowScrollTop > windowHeight && windowScrollTop < (windowHeight * 3)) {
				if (scroll1 === 0) {
					currentPage = 0;
					if (frombottom === 1) {
						arrangeCurrentPage();
						scrambleOthers();
						frombottom = 0;
					}
					scroll0 = 0;
					scroll1 = 1;
					scroll2 = 0;
					scroll3 = 0;
					scroll4 = 0;
					scroll5 = 0;
					scroll6 = 0;
				} else {

				}
			}

			if (windowScrollTop > (windowHeight * 3) && windowScrollTop < (windowHeight * 6)) {
				if (scroll2 === 0) {
					currentPage = 1;
					arrangeCurrentPage();
					scrambleOthers();
					frombottom = 1;
					scroll0 = 0;
					scroll1 = 0;
					scroll2 = 1;
					scroll3 = 0;
					scroll4 = 0;
					scroll5 = 0;
					scroll6 = 0;
				} else {

				}
			}

			if (windowScrollTop > (windowHeight * 6) && windowScrollTop < (windowHeight * 9)) {
				if (scroll3 === 0) {
					currentPage = 2;
					arrangeCurrentPage();
					scrambleOthers();
					frombottom = 1;
					scroll0 = 0;
					scroll1 = 0;
					scroll2 = 0;
					scroll3 = 1;
					scroll4 = 0;
					scroll5 = 0;
					scroll6 = 0;
				} else {

				}
			}

			if (windowScrollTop > (windowHeight * 9) && windowScrollTop < (windowHeight * 12)) {
				if (scroll4 === 0) {
					currentPage = 3;
					arrangeCurrentPage();
					scrambleOthers();
					frombottom = 1;
					scroll0 = 0;
					scroll1 = 0;
					scroll2 = 0;
					scroll3 = 0;
					scroll4 = 1;
					scroll5 = 0;
					scroll6 = 0;
				} else {

				}
			}

			if (windowScrollTop > (windowHeight * 12) && windowScrollTop < (windowHeight * 15)) {
				if (scroll5 === 0) {
					currentPage = 4;
					arrangeCurrentPage();
					scrambleOthers();
					frombottom = 1;
					scroll0 = 0;
					scroll1 = 0;
					scroll2 = 0;
					scroll3 = 0;
					scroll4 = 0;
					scroll5 = 1;
					scroll6 = 0;
				} else {

				}
			}

			if (windowScrollTop > (windowHeight * 15) && windowScrollTop < (windowHeight * 18)) {
				//$("#soup-prev").click();
				if (scroll6 === 0) {
					currentPage = 5;
					arrangeCurrentPage();
					scrambleOthers();
					frombottom = 1;
					scroll0 = 0;
					scroll1 = 0;
					scroll2 = 0;
					scroll3 = 0;
					scroll4 = 0;
					scroll5 = 0;
					scroll6 = 1;
				} else {

				}
			}

			if ((windowScrollTop + 15) <= windowHeight || windowScrollTop > (windowHeight * 18)) {
				if ($("#soupwrapper").hasClass("floater")) {
					$("#soupwrapper").removeClass("floater", 3000, "easeInBack" );
					$(".floater").css({
						height: windowHeight + "px"
					});
				}
				frombottom = 0;
				scroll0 = 0;
				scroll1 = 0;
				scroll2 = 0;
				scroll3 = 0;
				scroll4 = 0;
				scroll5 = 0;
				scroll6 = 0;

			}

		} 
		else {
			if ($("#soupwrapper").hasClass("floater")) {
				$("#soupwrapper").removeClass("floater", 3000, "easeInBack" );
				$(".floater").css({
					height: windowHeight + "px"
				});
			}
			scroll0 = 0;
			scroll1 = 0;
			scroll2 = 0;
			scroll3 = 0;
			scroll4 = 0;
			scroll5 = 0;
			scroll6 = 0;

		}

	});

	var currentPage = 0;
	//generate content
	for (var i = 0; i < content.length; i++) {
		//split content letters to array
		for (var obj in content[i]) {
			//if string
			if (typeof content[i][obj] === "string") {
				content[i][obj] = content[i][obj].split("");
				continue;
			}
			//if array (grouped text)
			else if (typeof content[i][obj] === "object") {
				var toPush = [];
				for (var j = 0; j < content[i][obj].length; j++) {
					for (var k = 0; k < content[i][obj][j].length; k++) {
						toPush.push(content[i][obj][j][k]);
					}
				}
				content[i][obj] = toPush;
			}
		}
		//set text to 
		$("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
		setText();
		//clone to data
		$("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
		setText();
		$("#segments").append("<div class=\"soup-backg\"></div>");
		//setText();
	}
	//initial arrangement
	arrangeCurrentPage();
	scrambleOthers();
  /*
   * Event handlers
   */
	$(window).resize(function () {
		//debug
		//console.log("height adjusted " + window.innerHeight + "px");
		var adjustedheight = window.innerHeight * 18;
		$(".about-wrapper").css({
			height: adjustedheight + "px"
		})
		windowHeight = window.innerHeight;
		windowScrollTop = $(this).scrollTop();
		arrangeCurrentPage();
		scrambleOthers();
	});


	// $("#soup-prev").hide();
	// $("#soup-prev").click(function () {
	// 	$("#soup-next").show();
	// 	currentPage--;
	// 	if (currentPage === 0) {
	// 		$("#soup-prev").hide();
	// 	}

	// 	arrangeCurrentPage();
	// 	scrambleOthers();
	// });
	// $("#soup-next").click(function () {
	// 	$("#soup-prev").show();
	// 	currentPage++;
	// 	if (currentPage === content.length - 1) {
	// 		$("#soup-next").hide();
	// 	}
	// 	arrangeCurrentPage();
	// 	scrambleOthers();
	// });
  /*
   * Functions
   */
	function arrangeCurrentPage() {
		for (var i = 0; i < content[currentPage].title.length; i++) {
			$(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
				left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
				top: 30 + "%", //$(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
				color: "#826347",
				zIndex: 9001
			});
		}
		for (var i = 0; i < content[currentPage].desc.length; i++) {
			$(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
				left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
				top: 45 + "%",//$(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
				color: "#826347",
				zIndex: 9001
			});
		}
	}

	function setText() {
		var j;
		for (j = 0; j < content[i].title.length; j++) {
			$(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
		}
		for (j = 0; j < content[i].desc.length; j++) {
			$(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
		}
	}

	function scrambleOthers() {
		for (var i = 0; i < content.length; i++) {
			//don't scramble currentPage
			if (currentPage === i)
				continue;
			var parts = [
				["title", ".soup-title"],
				["desc", ".soup-desc"],
			];
			//apply to .title h1s and .desc ps
			for (var j = 0; j < parts.length; j++) {
				for (var k = 0; k < content[i][parts[j][0]].length; k++) {
					//define random position on screen
					var randLeft = Math.floor(Math.random() * $(window).width());
					var randTop = Math.floor(Math.random() * $(window).height());
					//defining boundaries
					var offset = $(".position-data").eq(currentPage).offset();
					var bounds = {
						left: offset.left,
						top: offset.top,
						right: $(window).width() - offset.left,
						bottom: $(window).height() - offset.top
					};
					var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
					var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
					//finally, apply all the scrambles
					$(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
						left: randLeft,
						top: randTop,
						color: "#DDD",
						zIndex: "initial"
					});
					$("#soup-container").css({
						"transition" : "2s",
						"background-image" : "url(images/PNG/background" + currentPage + ".png)",
						//"background-color": "rgba(255, 255, 255, 0.952)",
						"background-size" : "200px auto",
						"background-repeat" : "no-repeat",
						"background-position": "center center"
					});
				}
			}
		}
	}
});