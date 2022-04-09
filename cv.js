mybutton = document.getElementById("knowbutton");

function toAbout(){
    document.getElementById("about").scrollIntoView();
}

document.addEventListener("DOMContentLoaded", function(event) { 

	// get all of the elements with the 'scroll' class.
	const scrollList = document.querySelectorAll(".animated")

	const callback = (entries, observer) => {
		entries.forEach((entry) => {

			if (entry.isIntersecting) {

				entry.target.classList.add("scrolled");

			}
	  	})
	}
	
	const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
	
	const myObserver = new IntersectionObserver(callback, options)

	scrollList.forEach(scrollItem => {
		myObserver.observe(scrollItem)
	})

});

document.addEventListener("DOMContentLoaded", function(event) { 

	// get all of the elements with the 'scroll' class.
	const scrollList = document.querySelectorAll(".animated2")

	const callback = (entries, observer) => {
		entries.forEach((entry) => {

			if (entry.isIntersecting) {

				entry.target.classList.add("scrolled");

			}
	  	})
	}
	
	const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }
	
	const myObserver = new IntersectionObserver(callback, options)

	scrollList.forEach(scrollItem => {
		myObserver.observe(scrollItem)
	})

});

mybutton = document.getElementById("backTop");

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function skillsbr(){
	var $containerWidth = $(window).width();
	if($containerWidth < 992){
		$("#skills-list #skillbr").removeClass("brmed");
	}
	else {
		$("#skills-list #skillbr").addClass("brmed");
	}
}

function skillslist(){
	var $containerWidth = $(window).width();
	if(($containerWidth > 767) && ($containerWidth < 992)){
		$("#skills-list").hide();
		$("#skills-list2").show();
	}
	else {
		$("#skills-list").show();
		$("#skills-list2").hide();
	}
}

function hangman(){
	var $containerWidth = $(window).width();
	if($containerWidth < 768){
		$("#hangman").hide();
		$("#hangman2").show();
	}
	else {
		$("#hangman2").hide();
		$("#hangman").show();
	}
}

$(document).ready(function () {
    skillsbr();
	skillslist();
	hangman();
});

$(window).resize(function () {
    skillsbr();
	skillslist();
	hangman();
});
// $(document).ready(function() {
// 	$(window).resize(function(){
// 	if($(window).width() < 992){
// 		$("#skills-list #skillbr").removeClass("brmed");
// 	}
// 	else {
// 		$("#skills-list #skillbr").addClass("brmed");
// 	}
// 	})
// });

// $(document).ready(function() {
// 	$(window).resize(function(){
// 	if(($(window).width() > 767) && ($(window).width() < 992)){
// 		$("#skills-list").hide();
// 		$("#skills-list2").show();
// 	}
// 	else {
// 		$("#skills-list").show();
// 		$("#skills-list2").hide();
// 	}
// 	})
// });

// $(document).ready(function() {
// 	$(window).resize(function(){
// 	if($(window).width() < 768){
// 		$("#hangman").hide();
// 		$("#hangman2").show();
// 	}
// 	else {
// 		$("#hangman2").hide();
// 		$("#hangman").show();
// 	}
// 	})
// });

// $(document).ready(function() {
// 	const $skillslist = $('.skills-list');
// 	$(window).resize(function(){
// 	if($(window).width() < 992){
// 		$("#skills-list #skillbr").removeClass("brmed");
// 	}
// 	else {
// 		$("#skills-list #skillbr").addClass("brmed");
// 	}
// 	})
// });

// $(document).ready(function() {
// 	$(window).resize(function(){
// 	if(($(window).width() > 767) && ($(window).width() < 992)){
// 		$("#skills-list").hide();
// 		$("#skills-list2").show();
// 	}
// 	else {
// 		$("#skills-list").show();
// 		$("#skills-list2").hide();
// 	}
// 	})
// });

// $(document).ready(function() {
// 	$(window).resize(function(){
// 	if($(window).width() < 768){
// 		$("#hangman").hide();
// 		$("#hangman2").show();
// 	}
// 	else {
// 		$("#hangman2").hide();
// 		$("#hangman").show();
// 	}
// 	})
// });

// $(document).ready(function() {
// 	const $langhtml = $('.lang-html');
// 	const $langc = $('.lang-c');
// 	const $langcss = $('.lang-css');
// 	$(window).resize(function(){
// 	  if(($(window).width() > 767) && ($(window).width() < 992)){
// 		$langhtml.html($langhtml.html().split('&nbsp;').join('<!--nbsp-->'));
// 		$langhtml.html($langhtml.html().split('\u2002').join('<br>'));
// 		$langhtml.html($langhtml.html().split('\u2003').join('<!--emsp-->'));
// 		$langc.html($langc.html().split('\u2002').join('<br>'));
// 		$langc.html($langc.html().split('\u2003').join('<!--emsp-->'));
// 		$langcss.html($langcss.html().split('&nbsp;').join('<br>'));
// 		$langcss.html($langcss.html().split('\u2003').join('<!--emsp-->'));
// 	  }
// 	  else {
// 		$langhtml.html($langhtml.html().split('<!--nbsp-->').join('&nbsp;'));
// 		$langhtml.html($langhtml.html().split('<br>').join('\u2002'));
// 		$langhtml.html($langhtml.html().split('<!--emsp-->').join('\u2003'));
// 		$langc.html($langc.html().split('<br>').join('\u2002'));
// 		$langc.html($langc.html().split('<!--emsp-->').join('\u2003'));
// 		$langcss.html($langcss.html().split('<br>').join('&nbsp;'));
// 		$langcss.html($langcss.html().split('<!--emsp-->').join('\u2003'));
// 	  }
// 	})
//   });