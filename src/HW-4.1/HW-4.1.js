async function fetchComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  let json = await response.json();
  return json;
}

async function fetchPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  let json = await response.json();
  return json;
}

async function runFunctions() {
  let comments = await fetchComments();
  let posts = await fetchPosts();

  console.log(comments);
  console.log(posts);
}

runFunctions();
