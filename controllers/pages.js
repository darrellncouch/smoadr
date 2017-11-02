const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res)=> {res.render('index');},

  // Get partner profile.
  partners: (req, res)=>{
    knex('partners')
      .where('id', req.params.id)
      .then((result)=>{
        let thisPartner = result[0];
      })
    res.render('profile', {partner : thisPartner});
  },

  loginPage: (req, res)=>{res.render('login')},

}
