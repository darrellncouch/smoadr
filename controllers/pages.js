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

//API ROUTES
  //GET PARTNERS INFO
  partners: (req, res, next) => {
    knex('partners')
      .select()
      .orderBy('id')
      .then(partners => res.json(partners))
  },

  //SELECT PARTNER
  select: (req, res, next)=>{
    knex('partners')
      .update('selected', false)
      .where('selected', true )
      .then((result)=>{
        knex('partners')
          .update('selected', true)
          .where('id', req.params.id)
          .then((results)=>{
            knex('partners')
              .orderBy('id')
              .then((partners)=>{
                knex('bios')
                  .where('partner_id', req.params.id)
                  .orderBy('id')
                  .then((paragraphs)=>{
                    res.json(partners.concat(paragraphs))
                  })
              })
          })
      })

  },

  login: (req, res) => {
    res.render('login')
  },


}
