/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import heroes from './data/heroesData';
import HeroesList from './components/HeroesList';
import HeroesDetail from './components/HeroesDetail';

let listHeroes;
function getRandomHeroes(list) {
  listHeroes = list.sort(() => Math.random() - 0.5);
}

function App() {
  getRandomHeroes(heroes);
  const randomHeroes = listHeroes.slice(0, 4);
  const listToRender = randomHeroes.map((heroe) => <li key={heroe.id}>{heroe.name}</li>);
  return (
    <header>
      <h1>Tour of heroes</h1>
      <ul>{listToRender}</ul>
      <Router>
        <Switch>
          <Route exact path="/" component={HeroesList} />
          <Route exact path="/" component={HeroesDetail} />
        </Switch>
      </Router>
    </header>
  );
}
export default App;
