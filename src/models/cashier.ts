import {connection} from "../connection/connection";

connection.schema.hasTable('cashiers').then((exists) => {
	if (!exists) {
		return connection.schema
			.createTable('cashiers', (t) => {
				t.increments('id').primary();
				t.string('first_name', 100);
				t.string('last_name', 100);
				t.integer('age');
				t.enum('sex',['man,woman']);
				t.integer('years_of_experience');
			});
	}
}).catch((error) => console.log(error.message));





