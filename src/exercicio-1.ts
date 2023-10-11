export {};

// 1 - Retornando o número de vogais de uma palavra apenas usando a chamada de uma função:

/**
 * Conta o número de vogais em uma palavra, ignorando acentos.
 * @param word A palavra cujas vogais serão contadas.
 * @returns O número de vogais na palavra.
 */
const countVowels = (word: string): number => {
  let count: number = 0;
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  const wordWithoutAccents: string = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  wordWithoutAccents
    .split('')
    .map(char => char.toLowerCase())
    .forEach(char => vowels.includes(char) ? count++ : count)

  return count
}

const chosenWord: string = 'Tela';
const numberOfVowels: number = countVowels(chosenWord);
const output: string = `A expressão '${chosenWord}' tem ${numberOfVowels} vogais`

console.log(output)

// 2 - Retornando o número de vogais de uma palavra inserida em um input de formulário:

const input: HTMLInputElement = document.querySelector('.word-input') as HTMLInputElement;
const resultButton: HTMLButtonElement = document.getElementById('result-btn') as HTMLButtonElement;
const result: HTMLElement = document.querySelector('.result') as HTMLElement;

resultButton?.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
  const inputValue: string = input.value;
  const inputWordCount: number = countVowels(inputValue);
  if(result) {
    result.textContent = inputValue
      ? `A expressão '${inputValue}' tem ${inputWordCount} vogais`
      : "Insira uma palavra ou frase";
  }
})