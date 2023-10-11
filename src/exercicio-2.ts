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


/**
 * Encontra um objeto Scientist na lista através do id e retorna a bio do mesmo.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns Uma string, que será a bio do objeto Scientist encontrado, caso contrário "Nenhum cientista encontrado".
 */
const getScientistBio = (list: Scientist[], id: number): string => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  return scientist ? scientist.bio : "Nenhum cientista encontrado";
}

console.log(getScientistBio(lista, 3))

/**
 * Encontra um objeto Scientist na lista através do id e apaga o mesmo da lista.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns Uma string, que será o atributo nome do objeto Scientist encontrado, caso contrário, "Nenhum cientista encontrado".
 */
const getScientistName = (list: Scientist[], id: number): string => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  return scientist ? scientist.name : "Nenhum cientista encontrado";
}

console.log(getScientistName(lista, 3))

/**
 * Apaga um objeto Scientist da lista através do id.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns A lista 'list', atualizada, já sem o objeto Scientist que foi removido ou, caso o
 * id não seja encontrado na lista, será retornada a lista original.
 */
const deleteScientist = (list: Scientist[], id: number): Scientist[] => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  scientist ? list.splice(list.indexOf(scientist), 1) : list
  return list
}

console.log(deleteScientist(lista, 10))

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
  let scientistToUpdate: Scientist | undefined = list.find(s => s.id === id);
  if (scientistToUpdate) {
    if (name !== '') {
      scientistToUpdate.name = name;
    }
    if (bio !== '') {
      scientistToUpdate.bio = bio;
    }
    return scientistToUpdate;
  }
  return "Nenhum cientista encontrado";
}
console.log(updateScientist(lista, 3, "Gustavo Silva", "Um cientista famoso da USP"))
console.log(updateScientist(lista, 1, "", "Outra bio de um cientista famoso"))

// As versões em paradigma imperativo se encontram no arquivo exercicio-2-imperativo.ts