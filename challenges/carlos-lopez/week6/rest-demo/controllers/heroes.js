const express = require('express');
const heroes = require('./heroes');

const getTheHeroes = (req, res) => {
  res.send(heroes);
};
const getAHero = (req, res) => {
  const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);
  if (hero) {
    res.send(hero);
  } else {
    res.status(404);
    res.send('no encontré el heroe');
  }
};
module.exports = [
  { id: 12, name: 'pepe' },
  { id: 15, name: 'lola' },
], getTheHeroes, getAHero;
