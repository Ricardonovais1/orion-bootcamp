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

const getScientistBio = (list: Scientist[], id: number): string => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  return scientist ? scientist.bio : "Nenhum cientista encontrado";
}

console.log(getScientistBio(lista, 3))

// b) Crie uma função que retorne o name do id passado

const getScientistName = (list: Scientist[], id: number): string => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  return scientist ? scientist.name : "Nenhum cientista encontrado";
}

console.log(getScientistName(lista, 3))

// c) Crie uma função que apague um item da lista a partir de um id passado

const deleteScientist = (list: Scientist[], id: number): Scientist[] => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  scientist ? list.splice(list.indexOf(scientist), 1) : list
  return list
}

console.log(deleteScientist(lista, 10))

// d) Crie uma função que altere a bio ou o name a partir de um id passado

const updateScientist = (list: Scientist[], id: number, name: string, bio: string): Scientist | undefined => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  if (scientist) {
    if (name !== '') {
      scientist.name = name;
      return scientist

    }
    if (bio !== '') {
      scientist.bio = bio;
      return scientist
    }
  }
  return scientist
}

console.log(updateScientist(lista, 3, "Gustavo", ""))
console.log(updateScientist(lista, 3, "", "É programador e já trabalhou com música"))

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// Ver arquivo exercicio-2-imperativo.ts