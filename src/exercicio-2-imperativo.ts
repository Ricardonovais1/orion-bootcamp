export {};

// Criação de uma interface pra referenciar como tipo do objeto permitido no array lista:

interface Scientist {
  id: number,
  name: string,
  bio:string
}

let lista: Scientist[] = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// a) Crie uma função que retorne a bio do id passado
// Usando loop for

const getScientistBioImperative = (list: Scientist[], id: number): string => {
  let result: string = "Nenhum cientista encontrado";
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].id === id) {
      result = list[i].bio;
    }
  }
  return result;
}

console.log(`a) - Com método imperativo: ${getScientistBioImperative(lista, 4)}`)

// b) Crie uma função que retorne o name do id passado
// Usando loop while

const getScientistName = (list: Scientist[], id: number): string => {
  let noScientist: string = "Nenhum cientista encontrado";
  let i: number = 0;
  while(list[i].id !== id && i < list.length - 1) { i++ }
  return i + 1 === id ? list[i].name : noScientist;
}

console.log(getScientistName(lista, 4))

// c) Crie uma função que apague um item da lista a partir de um id passado

const deleteScientist = (list: Scientist[], id: number): Scientist[] => {
  for(let i: number = 0; i < list.length; i++) {
    if(i === id - 1) {
      list.splice(i, 1);
    }
  }
  return list;
}

console.log(deleteScientist(lista, 2));