class User extends Model {
	// Table name is the only required property.
	static tableName = 'Employee';
  
	// Each model must have a column (or a set of columns) that uniquely
	// identifies the rows. The colum(s) can be specified using the `idColumn`
	// property. `idColumn` returns `id` by default and doesn't need to be
	// specified unless the model's primary key is something else.
	static idColumn = 'id';
  
	// Methods can be defined for model classes just as you would for
	// any javascript class. If you want to include the result of these
	// method in the output json, see `virtualAttributes`.
	fullName() {
	  return this.firstName + ' ' + this.lastName;
	}
  
	// Optional JSON schema. This is not the database schema!
	// Nothing is generated based on this. This is only used
	// for input validation. Whenever a model instance is created
	// either explicitly or implicitly it is checked against this schema.
	static jsonSchema = {
	  type: 'object',
	  required: ['firstName', 'lastName'],
  
	  properties: {
		id: {type: 'integer'},
		parentId: {type: ['integer', 'null']},
		firstName: {type: 'string', minLength: 1, maxLength: 255},
		lastName: {type: 'string', minLength: 1, maxLength: 255},
		age: {type: 'number'},
	  }
	};
  }