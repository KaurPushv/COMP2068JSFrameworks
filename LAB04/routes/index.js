var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('header', { title: 'Express' });
});

router.get('/actor1', function(req, res, next) {
  res.render('actor1', { actorName: 'Tom Hanks', actorDescription: 'Oscar-winning actor known for roles in Forrest Gump, Cast Away, and Toy Story.' });
});

router.get('/actor2', function(req, res, next) {
  res.render('actor2', { actorName: 'Leonardo DiCaprio', actorDescription: 'Renowned actor known for Titanic, Inception, and The Revenant.' });
});

router.get('/actor3', function(req, res, next) {
  res.render('actor3', { actorName: 'Tom Hanks', actorDescription: 'Oscar-winning actor known for roles in Forrest Gump, Cast Away, and Toy Story.' });
});

router.get('/actor4', function(req, res, next) {
  res.render('actor4', { actorName: 'Leonardo DiCaprio', actorDescription: 'Renowned actor known for Titanic, Inception, and The Revenant.' });
});

module.exports = router;
