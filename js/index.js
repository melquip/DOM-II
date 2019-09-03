// Your code goes here
let element = window;
document.querySelectorAll('h2').forEach((title) => title.addEventListener('mouseover', function(e) {
	title.style.color = 'red';
}));
document.querySelectorAll('h2').forEach((title) => title.addEventListener('mouseout', function(e) {
	title.style.color = 'black';
}));
element.addEventListener('wheel', function(e) {

});
element.addEventListener('drag', function(e) {

});
element.addEventListener('load', function(e) {

});
window.addEventListener('resize', function(e) {
	alert("Dont resize!");
});
document.querySelector('body').addEventListener('scroll', function(e) {
	console.log('Scrolling now...');
});
element.addEventListener('select', function(e) {

});
document.querySelectorAll('p').forEach((paragraph) => paragraph.addEventListener('dblclick', function(e) {
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