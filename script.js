const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//-----------------------------------we are using quokka.js for this code-----------------------------------

//Destructring
const book = getBook(3);
book
const { title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

//Destrucring with arrays and rest operator
//Rest operator ia always the last one
const [primaryGenre,secondaryGenre, ...restGenres] = genres;
genres

//Spread operator
//Spread opertor is always the first one
//usecase:
//1. Adding new elements to an array
//2. Adding new key-value pairs to an object
//3. Updating an array or object
newGenre = [...genres, "Isekai"];
newGenre
updatedBook = {...book, hasAnimeAdaptation: true, pages: 1500};
updatedBook

//Ternary operator
pageRange = pages > 1000 ? "Large Story" : "Short Story";
pageRange

//Arrow functions
const getYear = (str) => str.split("-")[0];

//Template literals
const bookInfo = `The book ${title} was written by ${author} and has ${pages} pages and was published on ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "a" : "no"} movie adaptation.`;
bookInfo

//Short circuit evaluation and truthy/falsy values
//falsey values: false, 0, "", null, undefined, NaN
//truthy values: everything else
console.log(hasMovieAdaptation && "This book has a movie adaptation");
console.log("" && "Not an empty string");
console.log(0 && "Not a zero");
console.log(undefined && "Not an undefined value");
console.log(NaN && "Not a NaN value");
console.log("Yo" || "");
console.log(1 || "A zero");
const spanishTranslation = book.translations.spanish || "No translation available";
spanishTranslation

//Nullish coalescing operator and Optional chaining
//Nullish values: null, undefined
// If we used || operator, 0 would be considered a falsy value and the string would be returned which is not what we want
// ?. is used to check if the property exists and if it does, it will return the value of the property. The ?. operator is used to avoid errors when accessing nested properties of an object. It is called the optional chaining operator. It is better to use the optional chaining operator when we are not sure if the property exists.
const count = book.reviews?.librarything?.reviewsCount ?? "No reviews available";
count


//Array map method
const books = getBooks();
const titles = books.map((book) => book.title);
titles
const essentialData = books.map((book)=>({
  title: book.title,
  author: book.author,
}));
essentialData

//Array filter method
longBooksWithMovie = books.filter((book)=> book.pages > 250).filter((book)=> book.hasMovieAdaptation);
longBooksWithMovie
adventureBooks = books.filter((book)=> book.genres.includes("adventure")).map((book)=>book.title);
adventureBooks

//Array reduce method
const totalPagesofAllBooks = books.reduce((acc, book)=> acc + book.pages, 0);
totalPagesofAllBooks

//Array sort
//slice is used to create a shallow copy of the array otherwise the original array will be sorted
const sortedBooksByPageNo = books.slice().sort((a,b)=> a.pages - b.pages);

//Working with immutable data
//Adding a new book
const newBook = {
  id: 6,
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  publicationDate: "1937-09-21"
};
const updatedBooks = [...books, newBook];
updatedBooks
//Deleting a book
const bookToDelete = 2;
const updatedBooksAfterDelete = books.filter((book)=> book.id !== bookToDelete);
updatedBooksAfterDelete
//Updating a book
const bookToUpdate = 1;
const updatedBooksAfterUpdate = books.map((book)=> book.id === bookToUpdate ? {...book, title: "The Lord of the Rings: The Fellowship of the Ring"} : book);

//Asynchronous JavaScript
fetch('https://jsonplaceholder.typicode.com/todos/4').then((response)=> response.json()).then((data)=> console.log(data));
console.log("Passed through first 1");

//Async/Await
async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/7');
  const data = await response.json();
  console.log(data);
  console.log("Passed through later");
}
fetchTodo();
console.log("Passed through first 2");