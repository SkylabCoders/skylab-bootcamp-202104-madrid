class Pro {
  heroes = [{ id: "1", name: "Bombasto" }];

  lanzarPromesa() {
    return new Promise((res, req) => {
      setTimeout(() => {
        res(this.heroes);
      }, 3000);
    });
  }
}

module.exports = Pro;
