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

let isMouseDown = false;
let blockMouseDown;
let blockCanAnim = true;
let blockGoLeft;
blocks.forEach((block, i) => {
	block.style.transform = 'translateY(0)';
	block.style.transition = 'transform 1s ease-in-out';
	block.style.marginLeft = '0px';
	block.addEventListener('mouseup', function(e) {
		if(e.which === 1 && blockCanAnim) {
			blockCanAnim = false;
			clearTimeout(blockGoLeft);
			let index = Array.from(container.children).indexOf(this);
			this.style.transform = 'translateY(calc(-'+(index*100)+'% - '+(index*20)+'px))';
			setTimeout(() => {
				console.log(this);
				blockCanAnim = true;
				blocks.forEach((b, i) => b.style.transition = 'transform 1s ease-in-out');
				this.style.transition = 'transform 0s ease-in-out';
				this.style.transform = 'translateY(0)';
				container.prepend(block);
			}, 1000);
		}
	});
	block.addEventListener('mousedown', function() {
		blockGoLeft = setTimeout(function() {
			blockMouseDown = block;
			isMouseDown = true;
		}, 100);
	});
});

container.addEventListener('mouseup', function(e) {
	isMouseDown = false;
});

setInterval(function() {
	if(isMouseDown) {
		blockMouseDown.style.marginLeft = parseInt(blockMouseDown.style.marginLeft) + 1 + 'px';
	}
}, 10);

