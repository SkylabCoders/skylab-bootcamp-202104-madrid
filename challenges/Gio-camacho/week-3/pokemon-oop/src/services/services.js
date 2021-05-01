class Services {
  constructor(name, limit, offset) {
    this.name = name;
    this.limit = limit;
    this.offset = offset;
  }

  getAllPokemons() {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
      .then((response) => response.json());
  }

  getPokemon() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .then((response) => response.json());
  }
}

// module.exports = Services;
