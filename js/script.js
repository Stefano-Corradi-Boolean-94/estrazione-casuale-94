const classe94 = [
  'Giacomo	Arena',
  'Nicola	Bazzocchi',
  'Michele	Bertoia',
  'Samuele	Bumbello',
  'Simona	Buscicchio',
  'David Salvatore	Calaiò',
  'Marco	Cancelliere',
  'Marco	Capone',
  'Raffaele	Catalano',
  'Federico	Cattani',
  'Edwin Andres	Cayambe PIlicita',
  'Lapo	Ceracchini',
  'Leonardo	Chen',
  'Andrea	Convertini',
  'Marco	De Marie',
  'Carlo	De Mauro',
  'Mirko	Di Franco',
  'Nicolas	Di Mauro',
  'Mazlum	Erceylan',
  'Emilio	Federico',
  'Valerio	Filareti',
  'Sara	Gisondi',
  'Pierdomenico	Guarnieri',
  'Sebastiano	Guzzon',
  'Maurizio	Marotta',
  'Marco Vittorio	Mazzilli',
  'Marica	Mola',
  'Pietro	Muresu',
  'Francesco	Murro',
  'Gabriele	Petralia',
  'Michele Pio	Pilla',
  'Marco	Spezzaferro',
  'Daniele	Spuria',
  'Giovanni	Tinelli',
  'Cosimo	Tramonte',
  'Niccolò	Vaccina'
];

const bottone = document.getElementById('estrai');

bottone.addEventListener('click', function(){

  // estraggo un numero random da 0 alla lunghezza dell'array arrotondato per difetto
  const indiceRandom = Math.floor(Math.random() * classe94.length );

  const output = document.getElementById('nome-estratto');

  // stampo l'elemento dell'array a indice = indice estratto
  output.innerHTML = classe94[indiceRandom];

})
