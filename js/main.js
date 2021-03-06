// set up for starting to use object to store the pokemon data key values
let pokemonData = {};

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const poke1 = document.querySelector('#poke1').value;
  const url = 'https://pokeapi.co/api/v2/pokemon/' + poke1;
  const url2 = 'https://pokeapi.co/api/v2/pokemon-species/' + poke1;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const pokeImage = data.sprites.front_default;
      const pokeName = data.name;
      const pokeType = [];

      data.types.forEach((element) => pokeType.push(element.type.name)); // get types array and push elements to pokeType

      //outputs
      document.querySelector('#pokeImage').src = pokeImage;
      document.querySelector('#pokeName').innerText = pokeName;
      document.querySelector('#pokeType').innerText = pokeType;

      // second fetch for pokedex entry data
      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          const pokeEntry = data.flavor_text_entries[0].flavor_text;
          console.log(pokeEntry);
          console.log(data.flavor_text_entries[0]);
          //pokedex entry output
          document.querySelector('#pokeEntry').innerText = pokeEntry;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
