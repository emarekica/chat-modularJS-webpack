// exported to connection.js

export function getRandomName() {
  const adjs = [
    "arid",
    "acutum",
    "bellum",
    "cali",
    "cerule",
    "dulci",
    "gracili",
    "floresc",
    "gracili",
    "irise",
    "noct",
    "rubid",
    "solo",
    "viridis",
    "volumineux",
  ];

  const nouns = [
    "anemo",
    "anthemis",
    "astro",
    "blastus",
    "calia",
    "caulis",
    "cladus",
    "fluvia",
    "granum",
    "phytum",
    "pooecetes",
    "ramus",
    "sabell",
    "sentis",
    "sisymbrium",
  ];

  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    "_" +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}
