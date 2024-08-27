
const categories = {
    romance: { title: "Romance", image: "movie_img/Purple Hearts.jpg", imdb: "IMDB: 7.5/10", link: "romance.html" },
    comedy: { title: "Comedy", image: "movie_img/Rush Hour.png", imdb: "IMDB: 8.2/10", link: "comedy.html" },
    thriller: { title: "Thriller", image: "movie_img/Terrifier.jpg", imdb: "IMDB: 7.9/10", link: "thriller.html" },
    action: { title: "Action", image: "movie_img/Better Watch Out.jpeg", imdb: "IMDB: 8.5/10", link: "action.html" },
    horror: { title: "Horror", image: "movie_img/Annabelle.jpg", imdb: "IMDB: 7.0/10", link: "horror.html" },
    adventure: { title: "Adventure", image: "movie_img/Halloween Kills.jpg", imdb: "IMDB: 8.0/10", link: "adventure.html" }
};

document.querySelector('.get-started').addEventListener('click', function() {
    document.querySelector('.categories').style.display = 'block';
    this.style.display = 'none'; // Hide Get Started button
    
    const container = document.querySelector('.card-container');
    container.innerHTML = ''; // Clear existing content


    for (let key in categories) {
        let category = categories[key];
        let card = `
            <div class="card" data-link="${category.link}">
                <h5>${category.title}</h5>
                <p class="imdb">${category.imdb}</p>
                <img src="${category.image}" alt="${category.title}">
            </div>
        `;
        container.innerHTML += card;
    }

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-link');
        });
    });

    window.scrollTo({
        top: document.querySelector('.categories').offsetTop,
        behavior: 'smooth'
    });
});