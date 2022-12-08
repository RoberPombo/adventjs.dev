const fitsInOneBox = require("./reto04");

describe("Adventjs 2022 - Reto 05 ", () => {
	it("should return a boolean", () => {
		expect(
			fitsInOneBox([
				{ l: 1, w: 1, h: 1 },
				{ l: 2, w: 2, h: 2 },
			])
		).toStrictEqual(expect.any(Boolean));
	});

	it("should return true with 2 boxes", () => {
		expect(
			fitsInOneBox([
				{ l: 1, w: 1, h: 1 },
				{ l: 2, w: 2, h: 2 },
			])
		).toStrictEqual(true);
	});

	it("should return false with 3 boxes", () => {
		expect(
			fitsInOneBox([
				{ l: 1, w: 1, h: 10 },
				{ l: 3, w: 3, h: 12 },
				{ l: 2, w: 2, h: 1 },
			])
		).toStrictEqual(false);
	});

	it("should return true with 4 boxes", () => {
		expect(
			fitsInOneBox([
				{ l: 1, w: 1, h: 10 },
				{ l: 3, w: 3, h: 12 },
				{ l: 2, w: 2, h: 1 },
				{ l: 4, w: 4, h: 12 },
			])
		).toStrictEqual(false);
	});
});
