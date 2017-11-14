exports.up = function(knex, Promise) {
  return knex.schema.createTable('bios', (table)=>{
    table.increments();
    table.integer('partner_id')
      .notNullable()
      .references('id')
      .inTable('partners')
      .onDelete('CASCADE')
      .index();
    table.text('paragraph');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bios')
};
