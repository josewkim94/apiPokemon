const { listarPokemons, detalharPokemon } = require('utils-playground')

const listar = async (req, res) => {
  try {

    const pokemons = await listarPokemons()
    res.json(pokemons)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const detalhar = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await detalharPokemon(id)
    const propriedades = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    };
    res.json(propriedades);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listar,
  detalhar
}

