var apps = require('../apps.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('playground', apps);
};