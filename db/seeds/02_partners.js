
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {first_name: 'Stephen', middle_initial: 'H', last_name: 'Scott', title: "Hon.", email: 'sscott@ssmadr.com', img: "http://www.nadn.org/photos/Steve-Scott.jpg"},
        {first_name: 'Chris', middle_initial: 'M', last_name: 'Skelly', title: "Hon.", email: 'cskelly@ssmadr.com', img: "http://www.nadn.org/photos/Chris-Skelly.jpg"},
        {first_name: 'Charles', middle_initial: 'J', last_name: 'Muchmore', title: "", email: 'cmuchmore@ssmadr.com', img: "http://www.nadn.org/photos/Charles-Muchmore.jpg"},
      ]);
    });
};
