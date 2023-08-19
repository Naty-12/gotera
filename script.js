
document.addEventListener('DOMContentLoaded', () => {
  const posts = [
    {
      title: 'Survival Modelling of waiting time for first job in Ethiopia',
      content: 'This National survey is one of the first to be conducted by Gotera insight and it aims to predict the waiting time for first job after graduation and will also identify factors that may influence waiting time of graduates in Ethiopia. As a university/college graduate, we kindly invite you to participate by filling out our form. Rest assured that any information you provide will be kept strictly confidential and solely used for our research paper.',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfOvsZT7uqw57LKnB2uetiZqTCRTqup0_rz9PNeYpUB78uI9A/viewform?usp=sf_link'
    }
  ];

  // Get reference to .articles container
  const articles = document.querySelector('.articles');

  // Generate HTML for each post
  posts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <a href="${post.url}">Read More</a>
    `;

    articles.appendChild(article);
  });
});


    