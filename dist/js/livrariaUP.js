"use strict";
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     genre: string;
//     availableQuantity: number;
// }
// class Library {
//     private books: Book[];
//     constructor() {
//         const storedBooks = localStorage.getItem('books');
//         this.books = storedBooks ? JSON.parse(storedBooks) : [];
//     }
//     private saveBooks() {
//         localStorage.setItem('books', JSON.stringify(this.books));
//     }
//     addBook(book: Book) {
//         const existingBook = this.books.find(b => b.id === book.id);
//         if (existingBook) {
//             throw new Error('Já existe um livro com esse ID');
//         }
//         this.books.push(book);
//         this.saveBooks();
//         this.updateBookList();
//     }
//     deleteBook(id: number) {
//         const index = this.books.findIndex(b => b.id === id);
//         if (index === -1) {
//             throw new Error('Nenhum livro encontrado com esse ID');
//         }
//         this.books.splice(index, 1);
//         this.saveBooks();
//         this.updateBookList();
//     }
//     updateBook(id: number, book: Book) {
//         const existingBook = this.books.find(b => b.id === id);
//         if (!existingBook) {
//             throw new Error('Nenhum livro encontrado com esse ID');
//         }
//         Object.assign(existingBook, book);
//         this.saveBooks();
//         this.updateBookList();
//     }
//     listBooks() {
//         return this.books;
//     }
//     searchBooks(value: string, field: string) {
//         const filteredBooks = this.books.filter(book => {
//             if (field === 'title') {
//                 return book.title.toLowerCase().includes(value.toLowerCase());
//             } else if (field === 'author') {
//                 return book.author.toLowerCase().includes(value.toLowerCase());
//             }
//             return false;
//         });
//         return filteredBooks;
//     }
//     updateBookList() {
//         const bookList = document.getElementById('bookList');
//         if (bookList) {
//             bookList.innerHTML = '';
//             this.books.forEach(book => {
//                 const bookItem = document.createElement('div');
//                 bookItem.classList.add('book-item');
//                 const title = document.createElement('p');
//                 title.textContent = `Título: ${book.title}`;
//                 const author = document.createElement('p');
//                 author.textContent = `Autor: ${book.author}`;
//                 const genre = document.createElement('p');
//                 genre.textContent = `Gênero: ${book.genre}`;
//                 const quantity = document.createElement('p');
//                 quantity.textContent = `Quantidade Disponível: ${book.availableQuantity}`;
//                 bookItem.appendChild(title);
//                 bookItem.appendChild(author);
//                 bookItem.appendChild(genre);
//                 bookItem.appendChild(quantity);
//                 bookList.appendChild(bookItem);
//             });
//         }
//     }
// }
// const library = new Library();
// const addBookForm = document.getElementById('addBookForm') as HTMLFormElement;
// if (addBookForm) {
//     addBookForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const titleInput = document.getElementById('titleInput') as HTMLInputElement;
//         const authorInput = document.getElementById('authorInput') as HTMLInputElement;
//         const genreInput = document.getElementById('genreInput') as HTMLInputElement;
//         const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
//         if (titleInput && authorInput && genreInput && quantityInput) {
//             const book: Book = {
//                 id: Math.floor(Math.random() * 1000), // Gerar um ID aleatório (apenas para exemplo)
//                 title: titleInput.value,
//                 author: authorInput.value,
//                 genre: genreInput.value,
//                 availableQuantity: parseInt(quantityInput.value)
//             };
//             try {
//                 library.addBook(book);
//                 addBookForm.reset();
//             } catch (error: any) {
//                 console.log(error.message);
//             }
//         }
//     });
// }
// const searchBooksForm = document.getElementById('searchBooksForm');
// if (searchBooksForm) {
//     searchBooksForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const searchValueInput = document.getElementById('searchValueInput') as HTMLInputElement;
//         const searchFieldSelect = document.getElementById('searchFieldSelect') as HTMLSelectElement;
//         if (searchValueInput && searchFieldSelect) {
//             const value = searchValueInput.value;
//             const field = searchFieldSelect.value;
//             const searchResults = library.searchBooks(value, field);
//             console.log(searchResults);
//         }
//     });
// }
// // Atualizar a lista de livros ao carregar a página
// window.addEventListener('load', () => {
//     library.updateBookList();
// });
