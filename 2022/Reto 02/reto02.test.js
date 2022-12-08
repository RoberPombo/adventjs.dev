const countHours = require("./reto02");

describe("Adventjs 2022 - Reto 02 ", () => {
	it("should return a number", () => {
		expect(countHours(2022, ["01/06", "04/01", "12/25"])).toStrictEqual(expect.any(Number));
	});

	it("should return 0 hours of overtime", () => {
		expect(countHours(2000, ["01/01"])).toStrictEqual(0);
	});

	it("should return 4 hours of overtime", () => {
		expect(countHours(2022, ["01/06", "04/01", "12/25"])).toStrictEqual(4);
	});

	it("should return 10 hours of overtime", () => {
		expect(
			countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"])
		).toStrictEqual(10);
	});
});
