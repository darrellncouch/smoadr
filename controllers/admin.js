const knex = require("../db/knex.js");

module.exports = {

  auth: (req, res)=>{
    knex('users')
      .where('email', req.body.email)
      .then((result)=>{
        if(result[0].password == req.body.password && result[0].is_admin == true){
          if(!req.session.user){
            req.session.user = result;
          }
          res.redirect('/content-management',)

        }
        res.redirect('/content-management/admin/login')
      })
  },

  home: (req, res)=>{
    knex('partners')
      .then((results)=>{
        knex('bios')
          .then((bios)=>{
            res.render('admin', {partners: results, bios: bios})
          })
      })
  },


}
