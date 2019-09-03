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
		if(e.which === 1 && blockCanAnim && !isMouseDown) {
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
		this.style.transition = 'transform 1s ease-in-out';
		blockGoLeft = setTimeout(function() {
			isMouseDown = true;
			blockMouseDown = block;
		}, 100);
	});
});

container.addEventListener('mouseup', function(e) {
	isMouseDown = false;
});

setInterval(function() {
	if(blockMouseDown) {
		let blockLeft = parseInt(blockMouseDown.style.marginLeft);
		if(isMouseDown) {
			// go right
			if(blockLeft < container.scrollWidth - 100) {
				blockMouseDown.style.marginLeft = blockLeft + 2 + 'px';
			}
		} else {
			if(blockLeft > 0) {
				blockMouseDown.style.marginLeft = blockLeft - 2 + 'px';
			}
		}
	}
}, 10);

