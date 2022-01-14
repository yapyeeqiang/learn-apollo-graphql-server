import { idGen } from '../utils/id.js';

const generateID = () => idGen.next().value;

const users = [
	{
		id: generateID(),
		name: 'A',
		age: 20,
		isMale: true,
	},
	{
		id: generateID(),
		name: 'B',
		age: 30,
		isMale: false,
	},
	{
		id: generateID(),
		name: 'C',
		age: 40,
		isMale: true,
	},
];

export function DB() {
	return { users };
}
