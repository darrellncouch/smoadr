//Update the name of the controller below and rename the file.
const pages = require("../controllers/pages.js")
const admin = require("../controllers/admin.js")


module.exports = function(app){

  app.get('/', pages.index)

  app.get('/partner/:id', pages.partner)

  app.get('/content-management/admin/login', pages.login)

  app.post('/auth', admin.auth )

  app.get('/partners', pages.partners)

  app.patch('/select/:id', pages.select)

  app.use(userAuth);

  app.get('/content-management', admin.home)


    app.use((req, res, next)=>{
      res.render('404')
    })











  function userAuth(req, res, next){
    if (req.session.user){
      next();
    }else{
      res.redirect('/');
    }
  }
}
