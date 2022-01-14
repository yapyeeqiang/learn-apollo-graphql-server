export function findUser({ users, id }) {
	const user = users.find((user) => user.id === id);
	const index = users.findIndex((user) => user.id === id);

	return [user, index];
}
