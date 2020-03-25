
exports.up = function(knex) {
  return knex.schema.createTable('s', table => {
  	table.string('id').primary()
  	table.string('').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('s')
};
