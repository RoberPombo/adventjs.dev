"use strict";

function wrapping(gifts) {
	const wrapGift = (gift) => {
		const wrappedUpDown = "*".repeat(gift.length + 2);

		return `${wrappedUpDown}\n*${gift}*\n${wrappedUpDown}`;
	};

	return gifts.map(wrapGift);
}

module.exports = wrapping;
