
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "darrell", last_name: 'couch', email: 'darrell@gmail.com', password: '1234', is_admin: true}
      ]);
    });
};
