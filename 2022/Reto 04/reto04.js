"use strict";

function fitsInOneBox(boxes) {
	return boxes
		.sort((a, b) => a.l - b.l)
		.every((box, idx) => {
			if (idx === boxes.length - 1) {
				return true;
			}
			const nextBox = boxes[idx + 1];

			return box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h;
		});
}

module.exports = fitsInOneBox;
