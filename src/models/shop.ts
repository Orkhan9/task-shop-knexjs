import {connection} from "../connection/connection";

connection.schema.hasTable('shops').then((exists) => {
	if (!exists) {
		return connection.schema
			.createTable('shops', (table) => {
				table.increments('id').primary();
				table.string('name').notNullable();
				table.string('city').notNullable();
				table.string('address').notNullable();
			});
	}
}).catch((error) => console.log(error.message));
