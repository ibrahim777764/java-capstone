export default class Renderer{
    static displayShows(shows) {
        const movieList = document.querySelector('.show-list');
        movieList.innerHTML = "";
        let movieListBuffer = "";
        for(let i = 0;i < shows.length;i++) {
            const listItem = `<li class='show-item'>
                                <figure>
                                  <img src='${shows[i].image.medium}'>
                                  <figcaption>${shows[i].name}</figcaption>
                                </figure>
                              </li>`
            movieListBuffer += listItem;
        }
        movieList.innerHTML += movieListBuffer;
    }
}