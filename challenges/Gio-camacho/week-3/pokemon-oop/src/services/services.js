class Services {
  constructor(name) {
    this.name = name;
  }

  // getAllPokemons() {
  //   return fetch(`https://pokeapi.co/api/v2/pokemon?${this.limit}=0&${this.offset}=100`)
  //     .then((response) => response.json());
  // }

  getPokemon() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .then((response) => response.json());
  }
}

module.exports = Services;
