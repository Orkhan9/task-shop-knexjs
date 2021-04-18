import {connection} from "../connection/connection";

connection.schema.hasTable('cash_register').then((exists) => {
	if (!exists) {
		return connection.schema
			.createTable('cash_register', (table) => {
				table.increments('id').primary();
				table.string('title').notNullable();
				table
					.integer('shop_id')
					.references('id')
					.inTable('shops');
			});
	}
}).catch((error) => console.log(error.message));
