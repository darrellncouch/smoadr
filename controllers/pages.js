const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res)=> {
    knex('partners')
      .then((result)=>{
        knex('bios')
        .then((bioResult)=>{
          res.render('index', {partners: result, bio: bioResult});
        })
      })
  },

  // Get partner profile.
  partner: (req, res)=>{
    knex('partners')
      .where('id', req.params.id)
      .then((result)=>{
        knex('bios')
          .where('partner_id', req.params.id)
          .then((bio)=>{
            res.render('profile', {partner: result[0], bio: bio });
      })
    })
  },

  login: (req, res)=>{res.render('login')},


}
