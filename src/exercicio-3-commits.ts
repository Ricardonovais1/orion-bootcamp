export {};

const commitHistory: HTMLElement | null = document.querySelector('.commit-history');

interface GithubCommit {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string;
      payload: string;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  committer: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
}

function getCommitsGihubApi() {
  fetch("https://api.github.com/repos/Ricardonovais1/orion-bootcamp/commits")
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status.toString());
    }

    let data = await (res.json());
    let commitCount: number = 0;
    data.forEach((commit: GithubCommit) => {
      commitCount++;
      printCommit(commit, commitCount);
      commitCount++;
    })
  })
}

getCommitsGihubApi();

function printCommit(commit: GithubCommit, count: number) {
  let commitMessage: string = commit.commit.message;
  let commitDate: string = commit.commit.author.date.split('T')[0];
  let commitTime: string = `${commit.commit.author.date.split('T')[1].split(":")[0]}:${commit.commit.author.date.split('T')[1].split(":")[1]}`;

  let commitDiv: HTMLElement = document.createElement("div");
  commitDiv.classList.add('commit-div');
  let commitID: HTMLElement = document.createElement("h3");
  commitID.textContent = `ID: ${count}`;
  commitDiv.appendChild(commitID);

  let commitMessageElement: HTMLElement = document.createElement("p");
  commitMessageElement.textContent = `Mensagem: ${commitMessage}`;
  commitDiv.appendChild(commitMessageElement);

  let commitDateTimeElement: HTMLElement = document.createElement("p");
  commitDateTimeElement.textContent = `Quando: ${commitDate} | ${commitTime}h`;
  commitDiv.appendChild(commitDateTimeElement);

  commitHistory?.appendChild(commitDiv);

  console.log(commit.commit.author.date.split('T')[0])
  console.log(`${commit.commit.author.date.split('T')[1].split(":")[0]}:${commit.commit.author.date.split('T')[1].split(":")[1]}`)
}