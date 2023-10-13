export {};
// import { ScientistList } from "./exercicio-2-imperativo";

interface Scientist {
  id: number,
  name: string,
  bio:string
}

let lista2A: Scientist[] = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];


/**
 * Exercício 1 - Pegando a tabela que está no html.
 */
const table: HTMLElement = document.getElementById('scientists-table') as HTMLElement;
const tableBody: HTMLElement = document.querySelector(".table-body") as HTMLElement;


/**
 * Apaga todos os registros da tabela, depois cria as linhas (tr) da tabela de cientistas, fazendo um loop na lista e criando as td's.
 * @param list Array de Scientists declarado acima.
 * @returns A tr, com id, nome e bio para cada objeto da lista de cientistas.
 */
function createScientistsRow(listOfScientists: Scientist[]) {

  while (tableBody?.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  listOfScientists.forEach(scientist => {
    const tr: HTMLElement = document.createElement("tr") as HTMLElement;

    const tdId: HTMLElement = document.createElement("td")
    tdId.innerHTML = `${scientist.id}`
    tr.appendChild(tdId)

    const tdName: HTMLElement = document.createElement("td")
    tdName.textContent = scientist.name
    tr.appendChild(tdName)

    const tdBio: HTMLElement = document.createElement("td")
    tdBio.textContent = scientist.bio
    tr.appendChild(tdBio)

    tableBody?.appendChild(tr);
  })
}

createScientistsRow(lista2A);

// Exercício 3-A - Retornar bio

const resultEx3A: HTMLElement = document.querySelector('.result-3-a') as HTMLElement;
const idInput3A: HTMLInputElement = document.querySelector('.id-input-3-A') as HTMLInputElement;
const resultButtonEx3A: HTMLButtonElement = document.querySelector('.result-btn-ex-3-a') as HTMLButtonElement;

resultButtonEx3A?.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
  const userIdInput: number = Number(idInput3A?.value);
  idInput3A.textContent = "";
  idInput3A.focus();
  resultEx3A.textContent= getScientistBio(lista2A, userIdInput);
})

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


// Exercício 3-B - Retornar nome

const resultEx3B: HTMLElement = document.querySelector('.result-3-b') as HTMLElement;
const idInput3B: HTMLInputElement = document.querySelector('.id-input-3-b') as HTMLInputElement;
const resultButtonEx3B: HTMLButtonElement = document.querySelector('.result-btn-ex-3-b') as HTMLButtonElement;

resultButtonEx3B?.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
  const userIdInput: number = Number(idInput3B?.value);
  idInput3B.focus();
  resultEx3B.textContent = getScientistName(lista2A, userIdInput);
})

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

// Exercício 3-C - Deletar cientista

const resultEx3C: HTMLElement = document.querySelector('.result-3-c') as HTMLElement;
const idInput3C: HTMLInputElement = document.querySelector('.id-input-3-c') as HTMLInputElement;
const resultButtonEx3C: HTMLButtonElement = document.querySelector('.result-btn-ex-3-c') as HTMLButtonElement;

resultButtonEx3C?.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
  const userIdInput: number = Number(idInput3C?.value);
  idInput3C.focus();
  resultEx3C.textContent = deleteScientist(lista2A, userIdInput);
})

/**
 * Apaga um objeto Scientist da lista através do id.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @returns A lista 'list', atualizada, já sem o objeto Scientist que foi removido ou, caso o
 * id não seja encontrado na lista, será retornada a lista original.
 */
const deleteScientist = (list: Scientist[], id: number): string => {
  let scientist: Scientist | undefined = list.find(s => s.id === id);
  scientist ? list.splice(list.indexOf(scientist), 1) : list
  createScientistsRow(list)
  return scientist
              ? `Veja a tabela de cientistas. Foi excluído o cientista ${scientist?.name}, com id ${scientist?.id}`
              : "Nenhum cientista encontrado com este id"
}

// Exercício 3-D - Atualizar nome e/ou bio de cientista

const resultEx3D: HTMLElement = document.querySelector('.result-3-d') as HTMLElement;
const idInput3D: HTMLInputElement = document.querySelector('.id-input-3-d') as HTMLInputElement;
const nameInput3D: HTMLInputElement = document.querySelector('.name-input-3-d') as HTMLInputElement;
const bioInput3D: HTMLInputElement = document.querySelector('.bio-input-3-d') as HTMLInputElement;
const resultButtonEx3D: HTMLButtonElement = document.querySelector('.result-btn-ex-3-d') as HTMLButtonElement;

resultButtonEx3D?.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
  const userIdInput: number = Number(idInput3D?.value);
  const userNameInput: string = nameInput3D?.value;
  const userBioInput: string = bioInput3D?.value;
  idInput3D.focus();
  resultEx3D.textContent = updateScientist(lista2A, userIdInput, userNameInput, userBioInput);
})

/**
 * Atualiza o nome ou a bio de um objeto Scientist da lista através do id.
 * @param list Array de Scientists declarado acima.
 * @param id Id usado para acessar cada objeto Scientist no Array list.
 * @param name String que será inserida como valor do atributo nome do objeto Scientist selecionado.
 * @param bio String que será inserida como valor do atributo bio do objeto Scientist selecionado.
 * @returns O objeto Scientist atualizado, caso tenha sido alterado nome e/ou bio. Caso contrário retorna
 * uma string "Nenhum cientista encontrado".
 */
const updateScientist = (list: Scientist[], id: number, name: string, bio: string): string => {
  let scientistToUpdate: Scientist | undefined = list.find(s => s.id === id);
  if (scientistToUpdate) {
    if (name !== '') {
      scientistToUpdate.name = name;
    }
    if (bio !== '') {
      scientistToUpdate.bio = bio;
    }
  }
  if (scientistToUpdate) {
    createScientistsRow(list)
    return "Verifique na tabela de cientistas os dados atualizados";
  } else {
    return "Nenhumuma alteração foi feita";
  }
}