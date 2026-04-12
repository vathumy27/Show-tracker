
const grid = document.querySelector(".grid");
const letters = document.querySelectorAll(".alphabet span");
const genres = document.querySelectorAll(".categories button");
const searchInput = document.querySelector(".header-row input");

let selectedLetter = "ALL";
let selectedGenre = "ALL";
let searchText = ""; 


function displayShows(showList) {
  grid.innerHTML = "";

  showList.forEach(show => {
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.dataset.title = show.name;
    card.dataset.genre = show.genre.join(" ");

    card.innerHTML = `
      <a href="detail.html">
        <img src="${show.image}" />
      </a>
      <h3>${show.name}</h3>
      <p>Episodes: ${show.episodes}</p>
    `;

    grid.appendChild(card);
  });
}


function filterShows() {
  const allShows = getShows();

  const filtered = allShows.filter(show => {
    const title = show.name.toUpperCase();
    const genre = show.genre.join(" ").toUpperCase();

    let matchLetter = false;
    let matchGenre = false;
    let matchSearch = true; 
    
    if (selectedLetter === "ALL") {
      matchLetter = true;
    } 
    else if (selectedLetter === "0-9") {
      matchLetter = /^[0-9]/.test(title);
    } 
    else {
      matchLetter = title.startsWith(selectedLetter);
    }

    
    if (selectedGenre === "ALL") {
      matchGenre = true;
    } 
    else {
      matchGenre = genre.includes(selectedGenre.toUpperCase());
    }

   
    if (searchText !== "") {
      matchSearch = title.includes(searchText);
    }

    return matchLetter && matchGenre && matchSearch;
  });

  displayShows(filtered);
}




letters.forEach(letter => {
  letter.addEventListener("click", () => {
    selectedLetter = letter.dataset.letter;
    filterShows();
  });
});


genres.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedGenre = btn.dataset.genre;
    filterShows();
  });
});


searchInput.addEventListener("input", () => {
  searchText = searchInput.value.trim().toUpperCase();
  filterShows();
});


displayShows(getShows());