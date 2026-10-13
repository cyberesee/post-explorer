const API_URL = "https://jsonplaceholder.typicode.com/posts";
const POST_LIMIT = 5;

const loadBtn  = document.querySelector("#loadBtn");
const retryBtn = document.querySelector("#retryBtn");
const statusEl = document.querySelector("#status");
const postList = document.querySelector("#postList");

async function loadPosts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const posts = await response.json();
  renderPosts(posts.slice(0, POST_LIMIT));
}

loadBtn.addEventListener("click", loadPosts);

function renderPosts(posts) {
  postList.textContent = "";

  for (const post of posts) {
    const article = document.createElement("article");
    article.className = "post";

    const id = document.createElement("span");
    id.className = "post-id";
    id.textContent = `Post #${post.id}`;

    const title = document.createElement("h2");
    title.textContent = post.title;    // safe: textContent, not innerHTML

    const body = document.createElement("p");
    body.textContent = post.body;      // safe: textContent, not innerHTML

    article.append(id, title, body);
    postList.appendChild(article);
  }
}