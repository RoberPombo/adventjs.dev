function getGiftsToRefill(a1, a2, a3) {
	const setGifts = new Set([...a1, ...a2, ...a3]);

	return [...setGifts].filter((gift) => {
		const giftIntoA1 = a1.includes(gift);
		const giftIntoA2 = a2.includes(gift);
		const giftIntoA3 = a3.includes(gift);

		return [giftIntoA1, giftIntoA2, giftIntoA3].filter((status) => status).length === 1;
	});
}

module.exports = getGiftsToRefill;
