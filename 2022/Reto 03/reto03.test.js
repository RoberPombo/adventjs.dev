const distributeGifts = require("./reto03");

describe("Adventjs 2022 - Reto 03 ", () => {
	it("should return a number", () => {
		expect(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])).toStrictEqual(
			expect.any(Number)
		);
	});

	it("should return 0 gift boxes", () => {
		expect(distributeGifts(["videogames", "console"], ["midu"])).toStrictEqual(0);
	});

	it("should return 1 gift boxes", () => {
		expect(distributeGifts(["a", "b", "c"], ["d", "e"])).toStrictEqual(1);
	});

	it("should return 2 gift boxes", () => {
		expect(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])).toStrictEqual(2);
	});

	it("should return 5 gift boxes", () => {
		expect(
			distributeGifts(
				["game", "videoconsole", "computer"],
				[
					"midudev",
					"pheralb",
					"codingwithdani",
					"carlosble",
					"blasco",
					"facundocapua",
					"madeval",
					"memxd",
				]
			)
		).toStrictEqual(5);
	});

	it("should return 26 gift boxes", () => {
		expect(
			distributeGifts(
				["music"],
				[
					"midudev",
					"pheralb",
					"codingwithdani",
					"carlosble",
					"blasco",
					"facundocapua",
					"madeval",
					"memxd",
				]
			)
		).toStrictEqual(26);
	});
});
