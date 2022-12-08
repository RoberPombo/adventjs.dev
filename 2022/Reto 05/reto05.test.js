const getMaxGifts = require("./reto05");

describe("Adventjs 2022 - Reto 05 ", () => {
	it("should return a number", () => {
		expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(expect.any(Number));
	});

	it("should return 0 gifts", () => {
		expect(getMaxGifts([50], 15, 1)).toStrictEqual(0);
	});

	it("should return 20 gifts", () => {
		expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(20);
	});

	it("should return 20 gifts", () => {
		expect(getMaxGifts([12, 7, 3, 11, 5], 20, 3)).toStrictEqual(20);
	});

	it("should return 20 gifts", () => {
		expect(getMaxGifts([12, 7, 12, 3, 12, 7, 6], 20, 3)).toStrictEqual(20);
	});

	it("should return 50 gifts", () => {
		expect(getMaxGifts([50], 100, 1)).toStrictEqual(50);
	});

	it("should return 70 gifts", () => {
		expect(getMaxGifts([50, 70], 100, 1)).toStrictEqual(70);
	});

	it("should return 100 gifts", () => {
		expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toStrictEqual(100);
	});

	it("should return 115 gifts", () => {
		expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toStrictEqual(115);
	});
});
