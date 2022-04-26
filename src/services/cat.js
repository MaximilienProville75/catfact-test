const getCats = async () => {
  const response = await fetch("https://catfact.ninja/breeds");
  const cats = await response.json();
  return cats.data;
};

const getFact = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const fact = await response.json();
  return fact;
};

export { getCats, getFact };
