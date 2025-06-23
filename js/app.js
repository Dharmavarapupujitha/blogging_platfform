let currentUser = null;

function showLogin() {
  document.getElementById("auth-section").innerHTML = `
    <h2>Login</h2>
    <input id="login-username" placeholder="Username">
    <button onclick="login()">Login</button>
  `;
}

function showSignup() {
  document.getElementById("auth-section").innerHTML = `
    <h2>Signup</h2>
    <input id="signup-username" placeholder="Choose a username">
    <button onclick="signup()">Signup</button>
  `;
}

function login() {
  const username = document.getElementById("login-username").value;
  if (username) {
    currentUser = username;
    loadBlog();
  }
}

function signup() {
  const username = document.getElementById("signup-username").value;
  if (username) {
    currentUser = username;
    loadBlog();
  }
}

function loadBlog() {
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("blog-section").style.display = "block";
  showPosts();
}

function createPost() {
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  const postContainer = document.getElementById("posts-container");

  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <small>By ${currentUser}</small>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  postContainer.prepend(post);
}

function showPosts() {
  document.getElementById("posts-container").innerHTML = "";
}
