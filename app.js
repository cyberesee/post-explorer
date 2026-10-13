const API_URL = "https://jsonplaceholder.typicode.com/posts";
const POST_LIMIT = 5;

const loadBtn  = document.querySelector("#loadBtn");
const retryBtn = document.querySelector("#retryBtn");
const statusEl = document.querySelector("#status");
const postList = document.querySelector("#postList");

function setStatus(message, type = "") {
  statusEl.textContent = message;
  statusEl.className = type;
}

function renderPosts(posts) {
  postList.textContent = "";

  for (const post of posts) {
    const article = document.createElement("article");
    article.className = "post";

    const id = document.createElement("span");
    id.className = "post-id";
    id.textContent = `Post #${post.id}`;

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    article.append(id, title, body);
    postList.appendChild(article);
  }
}

async function loadPosts() {
  loadBtn.disabled  = true;
  retryBtn.hidden   = true;
  retryBtn.disabled = true;
  postList.textContent = "";
  setStatus("Loading posts...", "loading");

  const params   = new URLSearchParams(window.location.search);
  const simulate = params.get("simulate");

  try {
    if (simulate === "error") {
      throw new Error("Simulated network failure");
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (simulate === "empty" || data.length === 0) {
      setStatus("No posts found. Try loading again later.");
      return;
    }

    // ===== Harry Potter posts (this is the important part) =====
    const harryPotterPosts = [
      {
        id: 1,
        title: "The Boy Who Lived",
        body: "Harry Potter discovers on his eleventh birthday that he is a wizard. Hagrid arrives to take him away from the Dursleys and into a world of magic, friendship, and a destiny he never knew he had."
      },
      {
        id: 2,
        title: "The Sorting Hat's Choice",
        body: "At Hogwarts, the Sorting Hat struggles between placing Harry in Slytherin or Gryffindor. In the end it respects Harry's own wish and sends him to Gryffindor, where he meets Ron and Hermione."
      },
      {
        id: 3,
        title: "The Mirror of Erised",
        body: "Harry finds a mysterious mirror that shows the deepest desire of one's heart. He sees his parents alive and smiling at him. Dumbledore warns that the mirror gives neither knowledge nor truth—only what we want most."
      },
      {
        id: 4,
        title: "The Philosopher's Stone",
        body: "Harry, Ron and Hermione uncover a plot to steal the Philosopher's Stone. They face a series of magical challenges and Harry confronts Professor Quirrell—and the dark force possessing him—in the chambers below Hogwarts."
      },
      {
        id: 5,
        title: "Friends and Loyalty",
        body: "Through danger, exams and late-night adventures, Harry learns that true friends stand by you. Ron and Hermione prove that courage, loyalty and a bit of cleverness can overcome even the darkest magic."
      }
    ];

    renderPosts(harryPotterPosts);
    setStatus(`Showing ${harryPotterPosts.length} posts.`);
  } catch (error) {
    console.error(error);
    setStatus("Could not load posts. Check your connection and try again.", "error");
    retryBtn.hidden = false;
  } finally {
    loadBtn.disabled  = false;
    retryBtn.disabled = false;
  }
}

loadBtn.addEventListener("click", loadPosts);
retryBtn.addEventListener("click", loadPosts);