import {connection} from "../connection/connection";

connection.schema.hasTable('cash_register_cashier').then((exists) => {
	if (!exists) {
		return connection.schema
			.createTable('cash_register_cashier', (table) => {
				table.increments('id').primary();
				table
					.integer('cashier_id')
					.references('id')
					.inTable('cashiers');
				table
					.integer('cash_register_id')
					.references('id')
					.inTable('cash_register');
			});
	}
}).catch((error) => console.log(error.message));
