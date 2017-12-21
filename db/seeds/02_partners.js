
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {first_name: 'Chris', middle_initial: 'M', last_name: 'Skelly', title: "Hon.", email: 'cskelly@smoadr.com', img: "http://www.nadn.org/photos/Chris-Skelly.jpg", selected: false},
        {first_name: 'Charles', middle_initial: 'J', last_name: 'Muchmore', title: "", email: 'cmuchmore@smoadr.com', img: "http://www.nadn.org/photos/Charles-Muchmore.jpg", selected: false},
        {first_name: 'Robert', middle_initial: 'H', last_name: 'Oberbillig', title: 'Hon.', email: 'roberbillig@smoadr.com', img: "https://i.imgur.com/I0Vyu40.jpg", selected: false}
      ]);
    });
};
