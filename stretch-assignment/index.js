/*
 Rockets:
  * When a block is clicked, it should go to the top of the stack.

 Travelers:
  * While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
  

  Rockets:
    
  * Animate the rockets, visually show them being transported to the top.
  
  Travelers:
    
  * Give the travelers a limit on the distance it can travel.
  * When the mouse button is released, it should travel back to its original position.
  * A mouse down that occurs during a transition back to the original position should send it traveling to the right again  from it's current position.
  
*/

let container = document.querySelector('.blocks');
let blocks = document.querySelectorAll('.block');

let blockMouseDown = false;
blocks.forEach(block => {
	block.addEventListener('mouseup', function(e) {
		if(e.which === 1) {
			container.prepend(block);
		}
	});
	block.style.marginLeft = '0%';
	block.addEventListener('mousedown', function() {
		blockMouseDown = block;
	});
});

container.addEventListener('mouseup', function(e) {
	blockMouseDown = false;
});

setInterval(function() {
	if(blockMouseDown) {
		blockMouseDown.style.marginLeft = Number(blockMouseDown.style.marginLeft) + 1 + '%';
	}
}, 10);

