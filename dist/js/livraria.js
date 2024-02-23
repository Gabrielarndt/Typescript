"use strict";
// interface Book{
//     id: number;
//     title: string;
//     author: string;
//     genre: string;
//     availableQuantity: number;
// }
//     class Library{
//     private books: Book[];
//      constructor(){
//         const storedBooks = localStorage.getItem('books');
//         this.books = storedBooks ?
//         JSON.parse(storedBooks): []
//      }
//      private saveBooks(){
//         localStorage.setItem('books', JSON.stringify(this.books))
//      }
//      addBook(book:Book){
//         //existir
//         const existingBook = this.books.find(b => b.id === book.id)
//         if(existingBook){
//             throw new Error('Já existe um livro com esse Id');    
//         }
//         //adicionar o elemento no final da array
//         this.books.push(book);
//         this.saveBooks();
//      }
//     deleteBook(id: number){
//         const index = this.books.findIndex(b => b.id === id);
//         if(index === -1){
//             throw new Error('Nenhum livro encontrado com esse Id')
//         }
//         //splice é usado para remover um elemento específico do array books da classe Library
//         //O método splice modifica o conteúdo do array, removendo ou substituindo elementos existentes.
//         this.books.splice(index, 1);
//         this.saveBooks();
//     }
//     updateBook(id: number, book: Book){
//         const existingBook = this.books.find(b => b.id === id);
//         if(!existingBook){
//             throw new Error('Nenhum livro encontrado com esse Id')
//         }
//         // propriedades do objeto book serão copiadas para o objeto existingBook, 
//         // substituindo os valores existentes ou adicionando novas propriedades, se necessário.
//         Object.assign(existingBook, book);
//         this.saveBooks();
//     }
//     listBooks(){
//         return this.books;
//     }
//     //fiel = campo - é utilizado para determinar qual campo dos livros será usado na busca
//     searchBooks(value: string, field: string){
//         const filteredBoooks = this.books.filter(book => {
//             if(field === 'title'){
//                 return book.title.toLowerCase().includes(value.toLowerCase());
//             }else if(field === "author"){
//                 return book.author.toLowerCase().includes(value.toLowerCase())
//             }
//             return false;
//         }) 
//         return filteredBoooks
//     }
// }
// const library = new Library();
// const book1: Book = {
//     id: 8,
//     title:'Livro 1',
//     author:'Autor 1',
//     genre: 'Genero 1',
//     availableQuantity: 3
// }
// const book2: Book = {
//     id: 12,
//     title:'Livro 2',
//     author:'Autor 2',
//     genre: 'Genero 2',
//     availableQuantity: 6
// }
// library.addBook(book1);
// library.addBook(book2);
// console.log(library.listBooks());
// const searchResults = library.searchBooks('Autor', 'author');
// console.log(searchResults);
// library.updateBook(8,{id: 3, title: 'Crepusculo', author:'Jason', genre:'Romance', availableQuantity: 10});
// console.log(library.listBooks());
// library.deleteBook(12);
// console.log(library.listBooks())
