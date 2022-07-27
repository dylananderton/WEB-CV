mybutton = document.getElementById("knowbutton");

function toAbout(){
    document.getElementById("about").scrollIntoView();
}

document.addEventListener("DOMContentLoaded", function(event) { 

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
		$("#notes").hide();
		$("#notes2").show();
		$("#passgen").hide();
		$("#passgen2").show();
		$("#crypto").hide();
		$("#crypto2").show();
		$("#weather").hide();
		$("#weather2").show();
	}
	else {
		$("#hangman2").hide();
		$("#hangman").show();
		$("#notes2").hide();
		$("#notes").show();
		$("#crypto2").hide();
		$("#crypto").show();
		$("#passgen2").hide();
		$("#passgen").show();
		$("#weather2").hide();
		$("#weather").show();
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