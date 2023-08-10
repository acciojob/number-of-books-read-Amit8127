const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let bookread = 0;
const numberOfBooksRead = () => {
  // write your code here
	
	for(let i = 0; i < library.length; i++) {
		if(library["readingStatus"]) {
			bookread++;
		}
	}
	return bookread;
};

// Do not change the code below

alert(numberOfBooksRead());
