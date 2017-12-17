exports.up = function(knex, Promise) {
  return knex.schema.createTable('partners', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('middle_initial');
    table.string('last_name');
    table.string('title');
    table.string('email');
    table.string('img');
    table.boolean('selected')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('partners')
};
