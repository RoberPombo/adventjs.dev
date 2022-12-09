const getGiftsToRefill = require("./reto07");

describe("Adventjs 2022 - Reto 07 ", () => {
	it("should return an array", () => {
		const a1 = ["bici", "coche", "bici", "bici"];
		const a2 = ["coche", "bici", "muñeca", "coche"];
		const a3 = ["bici", "pc", "pc"];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expect.any(Array));
	});

	it("should return an array of length 2", () => {
		const a1 = ["bici", "coche", "bici", "bici"];
		const a2 = ["coche", "bici", "muñeca", "coche"];
		const a3 = ["bici", "pc", "pc"];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(["muñeca", "pc"]);
	});

	it("should return an array of length 0", () => {
		const a1 = [];
		const a2 = [];
		const a3 = [];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual([]);
	});

	it("should return an array of length 0", () => {
		const a1 = ["a", "a"];
		const a2 = ["a", "a"];
		const a3 = ["a", "a"];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual([]);
	});

	it("should return an array of length 3", () => {
		const a1 = ["a", "a"];
		const a2 = ["b", "b"];
		const a3 = ["c", "c"];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(["a", "b", "c"]);
	});

	it("should return an array of length 6", () => {
		const a1 = ["a", "b"];
		const a2 = ["c", "d"];
		const a3 = ["e", "f"];

		expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(["a", "b", "c", "d", "e", "f"]);
	});
});
