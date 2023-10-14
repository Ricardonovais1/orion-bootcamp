export {};
import { GithubCommit } from "./interface_githubcommit";

const commitHistory: HTMLElement | null = document.querySelector('.commit-history');


/**
 * Acessa o endpoint de commits do repositório orion-bootcamp de forma assíncrona - AJAX.
 * Imprime os commits em ordem decrescente.
 * @returns Resposta da requisição em formato json e itera
 * sobre estes registros para imprimir estes resultados usando a função
 * printCommit.
 */
function getCommitsGihubApi() {
  fetch("https://api.github.com/repos/Ricardonovais1/orion-bootcamp/commits")
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status.toString());
    }

    return res.json();
  })
  .then(data => {
    let commitCount: number = data.length;
    data.forEach((commit: GithubCommit) => {
      printCommit(commit, commitCount);
      commitCount--;
    })
  })
  .catch(error => {
    console.log("Houve um erro: " + error)
  })
}

getCommitsGihubApi();

/**
 * Pega a mensagem de cada commit, seu id sua data e horário e os imprime na div de commits.
 * @param commit Objeto do tipo GithubCommit.
 * @param count Número que começa no commit mais recente a decresce até 1.
 * @returns O HTML do id, a mensagem, data e horário de cada commit.
 */
function printCommit(commit: GithubCommit, count: number) {
  let commitMessage: string = commit.commit.message;
  let commitDate: string = commit.commit.author.date.split('T')[0];
  let commitTime: string = `${commit.commit.author.date.split('T')[1].split(":")[0]}:${commit.commit.author.date.split('T')[1].split(":")[1]}`;

  let commitDiv: HTMLElement = document.createElement("div");
  commitDiv.classList.add('commit-div');
  let commitID: HTMLElement = document.createElement("h4");
  commitID.textContent = `ID: ${count}`;
  commitDiv.appendChild(commitID);

  let commitMessageElement: HTMLElement = document.createElement("p");
  commitMessageElement.textContent = `Mensagem: ${commitMessage}`;
  commitDiv.appendChild(commitMessageElement);

  let commitDateTimeElement: HTMLElement = document.createElement("p");
  commitDateTimeElement.textContent = `${commitDate} | ${commitTime}h`;
  commitDiv.appendChild(commitDateTimeElement);

  commitHistory?.appendChild(commitDiv);

  console.log(commit.commit.author.date.split('T')[0])
  console.log(`${commit.commit.author.date.split('T')[1].split(":")[0]}:${commit.commit.author.date.split('T')[1].split(":")[1]}`)
}