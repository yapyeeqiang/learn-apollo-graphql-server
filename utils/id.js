function* idGenerator() {
	let start = 0;

	while (true) {
		yield (start += 1);
	}
}

export const idGen = idGenerator();
