
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mtg').del()
    .then(function () {
      // Inserts seed entries
      return knex('mtg').insert([
       {
     },

      ]);
    });
};
