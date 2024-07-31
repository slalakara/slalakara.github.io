async function getData(postId) {
    let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
    let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
    
      const container = document.querySelector('.container');
      container.innerHTML += `<div class="postContent">
      <hr>
        <h2>${post.title}</h2> 
        <p>${post.body}</p>
       </div>`;


      container.innerHTML += comments.map(x => `<li>${x.user.fullName} said : ${x.body}</li>`).join('');
}

for(let i = 1; i <= 30; i++) {
  getData(i);
}
 