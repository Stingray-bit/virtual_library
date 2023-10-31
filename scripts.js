const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear library container

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('div');
        authorElement.classList.add('author');
        authorElement.textContent = `by ${book.author}`;

        const pagesElement = document.createElement('div');
        pagesElement.classList.add('pages');
        pagesElement.textContent = `${book.pages} pages`;

        const readElement = document.createElement('div');
        readElement.classList.add('read');
        readElement.textContent = book.read;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayBooks();
        });

        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.textContent = 'Read';
        readButton.addEventListener('click', function() {
            if (book.read === 'read') {
                book.read = 'not read yet';
            } else {
                book.read = 'read';
            }
            displayBooks();
        });

        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pagesElement);
        card.appendChild(readElement);
        card.appendChild(deleteButton);
        card.appendChild(readButton);

        libraryContainer.appendChild(card);
    });
}

document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('bookForm').style.display = 'block';
});


function addBookFromForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks(); 
    document.getElementById('bookForm').style.display = 'none'; // Hide the form again
}



// Example usage:
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibrary(theHobbit);
const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'not read yet');
addBookToLibrary(theGreatGatsby);
// const theHungerGames = new Book('The Hunger Games', 'Suzanne Collins', 374, 'read');
// addBookToLibrary(theHungerGames);
const theDaVinciCode = new Book('The Da Vinci Code', 'Dan Brown', 454, 'read');
addBookToLibrary(theDaVinciCode);
const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 197, 'read');
addBookToLibrary(theAlchemist);
// const theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet');
// addBookToLibrary(theLordOfTheRings);
// const theCatch22 = new Book('Catch-22', 'Joseph Heller', 453, 'read');
// addBookToLibrary(theCatch22);
// const theLittlePrince = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, 'read');
// addBookToLibrary(theLittlePrince);
// const theGiver = new Book('The Giver', 'Lois Lowry', 208, 'not read yet');
// addBookToLibrary(theGiver);
// const theKiteRunner = new Book('The Kite Runner', 'Khaled Hosseini', 371, 'not read yet');
// addBookToLibrary(theKiteRunner);
// const theHitchhikersGuideToTheGalaxy = new Book('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 193, 'read');
// addBookToLibrary(theHitchhikersGuideToTheGalaxy);
// const theCuriousIncidentOfTheDogInTheNightTime = new Book('The Curious Incident of the Dog in the Night-Time', 'Mark Haddon', 226, 'read');
// addBookToLibrary(theCuriousIncidentOfTheDogInTheNightTime);





// Call displayBooks to show the books on the page
displayBooks();