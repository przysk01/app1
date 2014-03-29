
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'MyApp' });
};

exports.test = function(req, res){
  res.render('test', { title: 'TestApp' });
};