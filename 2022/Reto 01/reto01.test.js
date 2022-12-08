const wrapping = require("./reto01");

describe("Adventjs 2022 - Reto 01 ", () => {
	it("should return an array", () => {
		expect(wrapping(["cat", "game", "socks"])).toStrictEqual(expect.any(Array));
	});

	it("should return 0 gifts", () => {
		expect(wrapping([])).toStrictEqual([]);
	});

	it("should return 1 gifts well wrapped", () => {
		expect(wrapping(["midu"])).toStrictEqual(["******\n*midu*\n******"]);
	});

	it("sshould return 1 gift of a well wrapped character", () => {
		expect(wrapping(["a"])).toStrictEqual(["***\n*a*\n***"]);
	});

	it("should return 3 gifts well wrapped", () => {
		expect(wrapping(["cat", "game", "socks"])).toStrictEqual([
			"*****\n*cat*\n*****",
			"******\n*game*\n******",
			"*******\n*socks*\n*******",
		]);
	});
});
