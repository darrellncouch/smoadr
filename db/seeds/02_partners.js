
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {first_name: 'Chris', middle_initial: 'M', last_name: 'Skelly', title: "Hon.", email: 'cskelly@smoadr.com', img: "http://www.nadn.org/photos/Chris-Skelly.jpg"},
        {first_name: 'Charles', middle_initial: 'J', last_name: 'Muchmore', title: "", email: 'cmuchmore@smoadr.com', img: "http://www.nadn.org/photos/Charles-Muchmore.jpg"},
        {firsrt_name: 'Robert', midde_initial: 'H', last_name: 'Oberbillig', title: 'Hon.', email: 'roberbillig@smoadr.com', imp: "http://www.nadn.org/photos/Steve-Scott.jpg"}
      ]);
    });
};
