$(function(){
	console.log('DOM loaded!');

	var carouselList = $('#carousel ul');
	var interval = setInterval(changeSlide, 3000);

	var leftButton = document.getElementById('left');
	leftButton.addEventListener('click', changeSlide);

	var rightButton = document.getElementById('right');
	rightButton.addEventListener('click', moveRightSlide);

	$('#box').hover(function() {
    	window.clearInterval(interval);    
		}, 
	function() {
    	interval = window.setInterval(function(){changeSlide()},3000);
	});

	function moveLeftSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({ marginLeft: 0 });
   	};

  	function moveRightSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({ marginLeft: -600 });
		carouselList.animate({ 'marginLeft': 0 }, 1000);
		
  	};
  	
	 function changeSlide() {
	 	carouselList.animate({'marginLeft':-600}, 1000, moveLeftSlide);
	 };
  

});