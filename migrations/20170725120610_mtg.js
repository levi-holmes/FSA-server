
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mtg', (table) => {
    table.increments(),
    table.text('name')
    table.text('color')
    table.text('type')
    table.integer('combined_mana_cost')
    table.text('rarity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('mtg')
};
