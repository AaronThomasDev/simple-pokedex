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
      const pokeType = `${data.types[0].type.name} + ${data.types[1].type.name}`;

      //outputs
      document.querySelector('#pokeImage').src = pokeImage;
      document.querySelector('#pokeName').innerText = pokeName;
      document.querySelector('#pokeType').innerText = pokeType;
      // document.querySelector('#pokeName').innerText = pokeName;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  // second fetch for pokedex entry data
  fetch(url2)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const pokeEntry = data.flavor_text_entries[0].flavor_text;
      console.log(pokeEntry);
      //pokedex entry output
      document.querySelector('#pokeEntry').innerText = pokeEntry;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
