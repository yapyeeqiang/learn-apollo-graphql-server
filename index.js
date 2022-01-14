import { ApolloServer } from 'apollo-server';
import { idGen } from './utils/id.js';
import { User, Query, Mutation } from './graphql/schema.js';
import { DB } from './db/users.js';
import { findUser } from './utils/user.js';

const { users } = DB();

const generateID = () => idGen.next().value;

const resolvers = {
	Query: {
		users() {
			return users;
		},
		user(_, { id }) {
			const [user] = findUser({ users, id: Number(id) });

			return user;
		},
	},
	Mutation: {
		addUser(_, args) {
			const newUser = {
				id: generateID(),
				...args,
			};

			users.push(newUser);

			return newUser;
		},
		updateUserName(_, { id, name }) {
			const [user, index] = findUser({ users, id: Number(id) });
			console.log(user, index);

			const updatedUser = {
				...user,
				name,
			};

			console.log(updatedUser);

			users[index] = updatedUser;

			return updatedUser;
		},
		updateUserAge(_, { id, age }) {
			const [user, index] = findUser({ users, id: Number(id) });

			const updatedUser = {
				...user,
				age,
			};

			users[index] = updatedUser;

			return updatedUser;
		},
		updateUserIsMale(_, { id, isMale }) {
			const [user, index] = findUser({ users, id: Number(id) });

			const updatedUser = {
				...user,
				isMale,
			};

			users[index] = updatedUser;

			return updatedUser;
		},
		deleteUser(_, { id }) {
			const [user, index] = findUser(Number(id));

			users.splice(index, 1);

			return user;
		},
	},
};

const server = new ApolloServer({
	typeDefs: [Query, Mutation, User],
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
