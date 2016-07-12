'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');
const fetch = require('node-fetch');

Route.on('/').render('welcome');

Route.get('/decks/new', function * (req, res) {
  const x = yield fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const deck = yield x.json();

  res.send(deck);
});

Route.get('/decks/:id/draw', function * (req, res) {
  const id = req.param('id');
  const count = req.input('count') || 5;
  const x = yield fetch(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`);
  const back = yield x.json();

  res.send(back);
});
