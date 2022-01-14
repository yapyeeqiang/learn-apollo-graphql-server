import { gql } from 'apollo-server';

export const User = gql`
	type User {
		id: ID
		name: String
		age: Int
		isMale: Boolean
	}
`;

export const Query = gql`
	type Query {
		users: [User]
		user(id: ID!): User
	}
`;

export const Mutation = gql`
	type Mutation {
		addUser(name: String!, age: Int, isMale: Boolean): User
		updateUserName(id: ID!, name: String!): User
		updateUserAge(id: ID!, age: Int!): User
		updateUserIsMale(id: ID!, isMale: Boolean!): User
		deleteUser(id: ID!): User
	}
`;
