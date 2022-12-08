"use strict";

function distributeGifts(packOfGifts, reindeers) {
	const maxLoad = reindeers.join("").length * 2;
	const totalLoad = packOfGifts.join("").length;

	return Math.floor(maxLoad / totalLoad);
}

module.exports = distributeGifts;
