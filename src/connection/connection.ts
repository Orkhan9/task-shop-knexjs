import {knex} from 'knex';

export const connection = knex({
	client: 'pg',
	connection: "postgres://postgres:12345@localhost:5432/shop_cashier",
});
















