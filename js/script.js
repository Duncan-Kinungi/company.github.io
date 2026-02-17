fetch("https://public-api.wordpress.com/rest/v1.1/sites/kinungifullstackdeveloperkenya.wordpress.com/posts?number=3")
  .then(response => response.json())
  .then(data => {
    let output = "";

   data.posts.forEach(post => {

  const hasImage = post.featured_image ? true : false;

  output += `
    <div class="col-md-4 col-sm-4 col-xs-12 wow fadeIn">
      <div class="blog-card">

        ${hasImage ? `<img src="${post.featured_image}" alt="${post.title}">` : ``}

        <div class="blog-content">
          <h4>${post.title}</h4>
          <p>${post.excerpt.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...</p>
          <a href="${post.URL}" target="_blank">Read More →</a>
        </div>

      </div>
    </div>
  `;
});


    document.getElementById("blog-posts").innerHTML = output;
  })
  .catch(error => console.error("Error loading blog posts:", error));
  

