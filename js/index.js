// Your code goes here
let element = window;

let body = document.querySelector('body');
let allHeading2 = document.querySelectorAll('h2');
let allParagraphs = document.querySelectorAll('p');
let images = document.querySelectorAll('img');
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.setAttribute('data-text', button.textContent));
// load event
window.addEventListener('load', function(e) {
	console.log('Hello! Welcome to Fun Bus website!');
	body.style.opacity = 1;
	// mouseenter event
	allHeading2.forEach(title => title.addEventListener('mouseenter', function(e) {
		title.style.color = 'red';
	}));
	// mouseleave event
	allHeading2.forEach(title => title.addEventListener('mouseleave', function(e) {
		title.style.color = 'black';
	}));
	// click event
	images.forEach(image => image.addEventListener('click', function(e) {
		this.style.display = 'none';
	}));
	
	let isDragging = false;
	function btnMouseMove(e) {
		console.log('Dragging a button');
		isDragging = true;
		this.classList.add('isDragging');
		this.textContent = "Stop dragging me!";
	}
	// mousedown event
	buttons.forEach(button => button.addEventListener('mousedown', function(e) {
		if(e.which === 1 && !isDragging) {
			// mousemove event
			this.addEventListener('mousemove', btnMouseMove);
		}
	}));
	// mouseup event
	buttons.forEach(button => button.addEventListener('mouseup', function(e) {
		console.log('Dropped a button');
		isDragging = false;
		this.classList.remove('isDragging');
		this.textContent = this.getAttribute('data-text');
		this.removeEventListener('mousemove', btnMouseMove);
	}));
	// mouseleave event triggering mouseup event
	buttons.forEach(button => button.addEventListener('mouseleave', function(e) {
		let event = document.createEvent("HTMLEvents");
		event.initEvent("mouseup", true, true);
		event.eventName = "mouseup";
		button.dispatchEvent(event);
	}));
	// resize event
	window.addEventListener('resize', function(e) {
		console.log("Dont resize!");
		body.style.opacity *= 0.99; 
	});
	
	// scroll event
	let colorInterval;
	window.addEventListener('scroll', function(e) {
		console.log('Scrolling now...');
		clearInterval(colorInterval);
		colorInterval = setTimeout(() => {
			document.querySelectorAll('h1, h2, h3, h4, h5, h6')
				.forEach(h2 => h2.style.color = 'rgb(' +Math.random()*255+ ', ' +Math.random()*255+ ', ' +Math.random()*255+ ')');
		}, 333);
	});
	
	// double click event
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

	// keypress event
	window.addEventListener('keypress', function(e) {
		alert('You can\'t write here');
	});
});