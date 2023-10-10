export {};

// 1 - Retornando o número de vogais de uma palavra apenas usando a chamada de uma função:

const countVowels = (word: string) => {
  let count: number = 0;
  let vowels: string[] = ["a", "e", "i", "o", "u"];
  let wordWithoutAccents: string = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  wordWithoutAccents
    .split('')
    .map(char => char.toLowerCase())
    .forEach(char => vowels.includes(char) ? count++ : count)

  return count
}

let chosenWord: string = 'Tela';
let numberOfVowels: number = countVowels(chosenWord);
let output: string = `A expressão '${chosenWord}' tem ${numberOfVowels} vogais`

console.log(output)

// 2 - Retornando o número de vogais de uma palavra inserida em um input de formulário:

const input: HTMLInputElement = document.querySelector('.word-input') as HTMLInputElement;
const btn: HTMLButtonElement = document.getElementById('result-btn') as HTMLButtonElement;
const result: HTMLElement = document.querySelector('.result') as HTMLElement;

btn?.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue: string = input.value;
  const inputWordCount: number = countVowels(inputValue);
  if(result) {
    result.textContent = inputValue
      ? `A expressão '${inputValue}' tem ${inputWordCount} vogais`
      : "Insira uma palavra ou frase";
  }
})