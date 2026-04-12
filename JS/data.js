

const shows = [
  {
    id: 1,
    name: "Game of Thrones",
    genre: ["Drama", "Fantasy"],
    rating: 9.5,
    episodes: 84,
    image: "assets/images/Game of thrones.jpg"
  },
  {
    id: 2,
    name: "Breaking Bad",
    genre: ["Crime", "Drama"],
    rating: 9.4,
    episodes: 79,
    image: "assets/images/Breaking bad.jpeg"
  },
  {
    id: 3,
    name: "Dexter",
    genre: ["Crime", "Drama"],
    rating: 8.6,
    episodes: 125,
    image: "assets/images/Dexter.jpg"
  },
  {
    id: 4,
    name: "How I Met Your Mother",
    genre: ["Comedy", "Romance"],
    rating: 8.3,
    episodes: 219,
    image: "assets/images/how i meet your mother.webp"
  },

    {
    id: 5,
    name: "Beauty And The Beast",
    genre: ["Drama", "Fantasy"],
    rating: 9.5,
    episodes: 80,
    image: "assets/images/Beauty and beast.jpg"
  },
  {
    id: 6,
    name: "Legend",
    genre: ["Crime", "Drama"],
    rating: 9.4,
    episodes: 72,
    image: "assets/images/I am legend.jpg"
  },
  {
    id: 7,
    name: "The Lazarus Effect",
    genre: ["Action", "Drama"],
    rating: 8.6,
    episodes: 120,
    image: "assets/images/The lazares effect.jpg"
  },
  {
    id: 8,
    name: "Name Of The King",
    genre: ["Comedy", "Romance"],
    rating: 8.3,
    episodes: 200,
    image: "assets/images/in the name of king.jpg"
  }
];



const defaultUsers = [
  { email: "user1@gmail.com", password: "1111" },
  { email: "user2@gmail.com", password: "2222" },
  { email: "user3@gmail.com", password: "3333" },
  { email: "user4@gmail.com", password: "4444" },
  { email: "user5@gmail.com", password: "5555" }
];


if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}



function getShows() {
  return shows;
}


function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}