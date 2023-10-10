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

/**
 * Encontra um objeto Scientist na lista através do id e retorna a bio do mesmo.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns Uma string, que será o atributo bio do objeto Scientist encontrado, caso contrário, "Nenhum cientista encontrado".
 */

class ScientistList {
  private scientists: Scientist[];

  constructor(scientistsList: Scientist[]) {
    this.scientists = scientistsList;
  }

  public getScientistBio(id: number): string {
    let scientist: Scientist | undefined = this.scientists.find(s => s.id === id);
    return scientist ? scientist.bio : "Nenhum cientista encontrado";
  }
}

let listOfScientists = new ScientistList(lista);


console.log(`Pela classe, ex-2/a: ${listOfScientists.getScientistBio(2)}`)

// b) Crie uma função que retorne o name do id passado
// Usando loop while

/**
 * Encontra um objeto Scientist na lista através do id e retorna o nome do mesmo.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns Uma string, que será o atributo nome do objeto Scientist encontrado, caso contrário, "Nenhum cientista encontrado".
 */

const getScientistName = (list: Scientist[], id: number): string => {
  let noScientist: string = "Nenhum cientista encontrado";
  let i: number = 0;
  while(list[i].id !== id && i < list.length - 1) { i++ }
  return i + 1 === id ? list[i].name : noScientist;
}

console.log(getScientistName(lista, 4))

// c) Crie uma função que apague um item da lista a partir de um id passado

/**
 * Apaga um objeto Scientist da lista através do id.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns A lista 'list', atualizada, já sem o objeto Scientist que foi removido ou, caso o
 * id não seja encontrado na lista, será retornada a lista original.
 */

const deleteScientist = (list: Scientist[], id: number): Scientist[] => {
  for(let i: number = 0; i < list.length; i++) {
    if(i === id - 1) {
      list.splice(i, 1);
    }
  }
  return list;
}

console.log(deleteScientist(lista, 2));

// d) Crie uma função que altere a bio ou o name a partir de um id passado

/**
 * Atualiza o nome ou a bio de um objeto Scientist da lista através do id.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @param name String que será inserida como valor do atributo nome do objeto Scientist selecionado.
 * @param bio String que será inserida como valor do atributo bio do objeto Scientist selecionado.
 * @returns O objeto Scientist atualizado, caso tenha sido alterado nome e/ou bio. Caso contrário retorna
 * uma string "Nenhum cientista encontrado".
 */

const updateScientist = (list: Scientist[], id: number, name: string, bio: string): Scientist | string => {
  let scientistToUpdate: Scientist = {id, name, bio};
  for(let i: number = 0; i < list.length; i++) {
    if(list[i].id === id) {
      if (name !== '') {
        list[i].name = name;
        scientistToUpdate = list[i];
      }
      if (bio !== '') {
        list[i].bio = bio;
        scientistToUpdate = list[i];
      }
      return scientistToUpdate;
    }
  }
  return "Nenhum cientista encontrado";
}

console.log(updateScientist(lista, 10, "Ricardo", ""))
console.log(updateScientist(lista, 3, "", "É programador e já trabalhou com música"))