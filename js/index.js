// Your code goes here
let element = window;

let body = document.querySelector('body');
let allHeading2 = document.querySelectorAll('h2');
let allParagraphs = document.querySelectorAll('p');
let images = document.querySelectorAll('img');

window.addEventListener('load', function(e) {
	console.log('Hello! Welcome to Fun Bus website!');
	// mouseenter
	allHeading2.forEach(title => title.addEventListener('mouseenter', function(e) {
		title.style.color = 'red';
	}));
	// mouseleave
	allHeading2.forEach(title => title.addEventListener('mouseleave', function(e) {
		title.style.color = 'black';
	}));
	// click
	images.forEach(image => image.addEventListener('click', function(e) {
		this.style.display = 'none';
	}));
	
	element.addEventListener('drag', function(e) {
	
	});

	window.addEventListener('resize', function(e) {
		console.log("Dont resize!");
	});
	
	body.addEventListener('scroll', function(e) {
		console.log('Scrolling now...');
	});
	
	allParagraphs.forEach(paragraph => paragraph.addEventListener('dblclick', function(e) {
		if (!navigator.clipboard) {
			alert('You can\'t doubleclick this content');
			return;
		}
		navigator.clipboard.writeText(this.textContent).then(function() {
			alert('You copied the paragraph!');
		}, function(err) {
			console.error('Could not copy text: ', err);
		});
	}));
});