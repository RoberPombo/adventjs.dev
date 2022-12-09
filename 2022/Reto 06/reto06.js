function createCube(size) {
	const CUBE = {
		TOP: { HALF: "/\\", SIDE: "_\\" },
		BOTTOM: { HALF: "\\/", SIDE: "_/" },
		SPACE: " ",
	};

	let cubeTop = "";
	let cubeBottom = "";
	for (let i = 1; i <= size; i++) {
		const topSpace = CUBE.SPACE.repeat(size - i);
		const topHalf = CUBE.TOP.HALF.repeat(i);
		const topSide = CUBE.TOP.SIDE.repeat(size);
		cubeTop += `${topSpace}${topHalf}${topSide}\n`;

		const repeatBottom = size + 1 - i;
		const bottomSpace = CUBE.SPACE.repeat(size - repeatBottom);
		const bottomHalf = CUBE.BOTTOM.HALF.repeat(repeatBottom);
		const bottomSide = CUBE.BOTTOM.SIDE.repeat(size);
		cubeBottom += `${bottomSpace}${bottomHalf}${bottomSide}\n`;
	}

	return `${cubeTop}${cubeBottom.replace(/\n$/, "")}`;
}

module.exports = createCube;
