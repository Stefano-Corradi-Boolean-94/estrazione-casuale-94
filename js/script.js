/*
Ho una lista di studenti e una lista di studenti estratti

SE la lista degli studenti estratti è più cordta dei quella di tutti gli studenti
  
  Estraggo uno studente
  SE lo studente non è presente nella lista lo inseirsco
  ATRIMENTI ne estraggo un altro

ALTRIMENTI do la possibilità di ricominciare

*/


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
const output = document.getElementById('nome-estratto');

// di default l'elenco dei nomi estratti è vuoto ed è una variabile globale
const nomiEstratti = []

bottone.addEventListener('click', function(){
  
  bottone.innerHTML = (nomiEstratti.length < classe94.length) ? 'Estrai' : 'Ricomincia';
  
  let outputString = '';

  // controllo che l'elenco degli estratti sia inferione a quello totale
  // se si ne estraggo uno
  if(nomiEstratti.length < classe94.length){
    let nomeValido = false;
    do{
      // estraggo un numero random da 0 alla lunghezza dell'array arrotondato per difetto
      const indiceRandom = getRandomNumber(0, classe94.length - 1)
      const nomeEstratto = classe94[indiceRandom];
      console.log(nomeEstratto);
      
      // pushare il nome nell'elenco estratti e vare diventare true il nomeValido lo faccio solo se il nome non è mai stato estratto
      if(!nomiEstratti.includes(nomeEstratto)){
        nomiEstratti.push(nomeEstratto);
        // stampo l'elemento dell'array a indice = indice estratto
        outputString = classe94[indiceRandom];
        // una volta inserito il nome il flag diventa true e blocca il ciclo
        nomeValido = true;
      }

      // il ciclo continua fino a quando il flag realivo al nome estratto non sia false
    }while(!nomeValido)
    
  }else{
    // se le'elenco degli estratti è pieno è pieno
    // resetto l'eleco estartti
    nomiEstratti.splice(0);
    outputString = 'Estrazione finita';
  }

  output.innerHTML = outputString;

})


function getRandomNumber(min, max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1 ) + min);

  return randomNumber;
}