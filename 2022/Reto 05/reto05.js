"use strict";

function getMaxGifts(giftsCities, maxGifts, maxCities) {
	const addUnusedPositions = (totalGifts, usedPositions, counterCities) => {
		let visitedCities = counterCities;

		return giftsCities.reduce((totalGifts, gift, idx) => {
			if (usedPositions.includes(idx)) {
				return totalGifts;
			}
			if (totalGifts + gift <= maxGifts && visitedCities < maxCities) {
				visitedCities += 1;

				return totalGifts + gift;
			}

			return totalGifts;
		}, totalGifts);
	};
	const sumGifts = (nextPosition, usedPositions = [], totalGifts = 0, counterCities = 0) => {
		if (nextPosition > giftsCities.length - 1) {
			return addUnusedPositions(totalGifts, usedPositions, counterCities);
		}
		if (totalGifts + giftsCities[nextPosition] > maxGifts) {
			return sumGifts(nextPosition + 1, usedPositions, totalGifts, counterCities);
		}
		if (counterCities === maxCities || totalGifts === maxGifts) {
			return totalGifts;
		}

		return sumGifts(
			nextPosition + 1,
			[...usedPositions, nextPosition],
			totalGifts + giftsCities[nextPosition],
			counterCities + 1
		);
	};

	return giftsCities.reduce((totalGifts, _, idx) => {
		if (totalGifts === maxGifts) {
			return totalGifts;
		}
		const giftsByCity = sumGifts(idx);
		if (giftsByCity > totalGifts && giftsByCity <= maxGifts) {
			return giftsByCity;
		}

		return totalGifts;
	}, 0);
}

module.exports = getMaxGifts;
