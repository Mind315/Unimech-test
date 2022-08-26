const getBtn = document.querySelector('#get-posts');
const table = document.querySelector('#table');
const tBody = document.querySelector('#tbody');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const id = document.querySelector('#id');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const state = {
  posts: [],
  postsWithSubstr: [],
  switchId: true,
  switchTitle: true,
  switchDescription: true
};

getBtn.addEventListener('click', async () => {
  tBody.innerHTML = '';
  state.postsWithSubstr = [];
  await getPostsRequest();
  state.posts.forEach((element) => {
    tBody.innerHTML += createPosts(element);
  });
});

input.addEventListener('input', () => {
  if (input.value.length > 2) {
    state.posts.forEach((item) => {
      if (item.title.includes(input.value)) {
        state.postsWithSubstr.push(item);
      }
    });

    tBody.innerHTML = '';
    state.postsWithSubstr.forEach((element) => {
      tBody.innerHTML += createPosts(element);
    });
    state.postsWithSubstr = [];
  }
});

// Sort by ID
id.addEventListener('click', () => {
  if (state.switchId) {
    state.posts.sort(function (a, b) {
      return b.id - a.id;
    });
    state.switchId = false;
  } else {
    state.posts.sort(function (a, b) {
      return a.id - b.id;
    });
    state.switchId = true;
  }

  render();
});
// Sort by Title
title.addEventListener('click', () => {
  if (state.switchTitle) {
    state.posts.sort(function (a, b) {
      if (a.title.length < b.title.length) {
        return -1;
      }
    });
    state.switchTitle = false;
  } else {
    state.posts.sort(function (a, b) {
      if (a.title.length > b.title.length) {
        return -1;
      }
    });
    state.switchTitle = true;
  }

  render();
});

//Sort by Description
description.addEventListener('click', () => {
  if (state.switchDescription) {
    state.posts.sort(function (a, b) {
      if (a.body.length < b.body.length) {
        return -1;
      }
    });
    state.switchDescription = false;
  } else {
    state.posts.sort(function (a, b) {
      if (a.body.length > b.body.length) {
        return -1;
      }
    });
    state.switchDescription = true;
  }

  render();
});

//==================================================
function render() {
  tBody.innerHTML = '';
  state.posts.forEach((element) => {
    tBody.innerHTML += createPosts(element);
  });
}

//functions
function createPosts(post) {
  return `
        <tr>
          <td>${post.userId}</td>
          <td>${post.id}</td>

          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
        `;
}

function getPostsRequest() {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((res) => res.json())
    .then((posts) => {
      state.posts = state.posts.concat(posts);
    });
}
