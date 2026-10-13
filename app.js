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
  console.log(posts.slice(0, POST_LIMIT));
}

loadBtn.addEventListener("click", loadPosts);