const loadDitto = async () => {
  const ditto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await ditto.json();
  console.log(data);
  return data;
};

loadDitto();
