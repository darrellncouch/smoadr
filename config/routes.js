//Update the name of the controller below and rename the file.
const pages = require("../controllers/pages.js")
module.exports = function(app){

  app.get('/', pages.index)

  app.get('/partner/:id', pages.partner)

  app.get('/content-management/admin/login', pages.login)
}
