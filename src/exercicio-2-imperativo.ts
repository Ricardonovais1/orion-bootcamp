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
 * Classe para gerenciar uma lista de cientistas.
 */
class ScientistList {
  private scientists: Scientist[];

  /**
   * Cria uma instância da classe ScientistList.
   * @param scientistsList - A lista inicial de cientistas.
   */
  constructor(scientistsList: Scientist[]) {
    this.scientists = scientistsList;
  }

  /**
   * Encontra um objeto Scientist na lista através do id e retorna a bio do mesmo.
   * @param id Id usado para acessar cada objeto Scientist no Array list.
   * @returns Uma string, que será o atributo bio do objeto Scientist encontrado, caso contrário, "Nenhum cientista encontrado".
   */
  public getScientistBio(id: number): string {
    let scientist: Scientist | undefined = this.scientists.find(s => s.id === id);
    return scientist ? scientist.bio : "Nenhum cientista encontrado";
  }

  /**
   * Encontra um objeto Scientist na lista através do id e apaga o mesmo da lista.
   * @param id Id usado para acessar cada objeto Scientist no Array list.
   * @returns Uma string, que será o atributo nome do objeto Scientist encontrado, caso contrário, "Nenhum cientista encontrado".
   */
  public getScientistName(id: number): string {
    let scientist: Scientist | undefined = this.scientists.find(s => s.id === id);
    return scientist ? scientist.name : "Nenhum cientista encontrado";
  }

  /**
   * Apaga um objeto Scientist da lista através do id.
   * @param id Id usado para acessar cada objeto Scientist no Array list.
   * @returns A lista 'list', atualizada, já sem o objeto Scientist que foi removido ou, caso o
   * id não seja encontrado na lista, será retornada a lista original.
   */
  public deleteScientist(id: number): Scientist[] {
    let scientist: Scientist | undefined = this.scientists.find(s => s.id === id);
    scientist ? this.scientists.splice(this.scientists.indexOf(scientist), 1) : this.scientists
    return this.scientists
  }

  /**
   * Atualiza o nome ou a bio de um objeto Scientist da lista através do id.
   * @param id Id usado para acessar cada objeto Scientist no Array list.
   * @param name String que será inserida como valor do atributo nome do objeto Scientist selecionado.
   * @param bio String que será inserida como valor do atributo bio do objeto Scientist selecionado.
   * @returns O objeto Scientist atualizado, caso tenha sido alterado nome e/ou bio. Caso contrário retorna
   * uma string "Nenhum cientista encontrado".
   */
  public updateScientist(id: number, name: string, bio: string): Scientist | string {
    let scientistToUpdate: Scientist | undefined = this.scientists.find(s => s.id === id);
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
}

let listOfScientists = new ScientistList(lista);


console.log(`Vendo bio, ex-2/a: ${listOfScientists.getScientistBio(2)}`)
console.log(`Vendo o nome, ex-2/b: ${listOfScientists.getScientistName(2)}`)
listOfScientists.deleteScientist(2)
console.log(`Verificando remoção, ex-2/c: ${listOfScientists.getScientistBio(2)}`)
listOfScientists.updateScientist(1, "", "Cientista Maluco Famoso")
console.log(`Verificando update, ex-2/d: ${listOfScientists.getScientistBio(1)}`)


