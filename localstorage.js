// let myLibrary = [];
// console.log(document.getElementById('input-title').value);

// let bookTitle = document.getElementById('input-title').value;
// let bookAuthor = document.getElementById('input-author').value;
// let bookPages = document.getElementById('input-pages').value;

// function Book(bookTitle, bookAuthor, bookPages) {
//     this.bookTitle = bookTitle
//     this.bookAuthor = bookAuthor
//     this.bookPages = bookPages
//   }

// function newBook(){
//     let book = {
//         title: document.getElementById('input-title').value,
//         author : document.getElementById('input-author').value,
//         pages : document.getElementById('input-pages').value
//     }
   
// //    console.log(myLibrary);
// //    document.getElementById('title').innerHTML = myLibrary[myLibrary.length-1].title;
// //    document.getElementById('author').innerHTML = myLibrary[myLibrary.length-1].author;
// //    document.getElementById('pages').innerHTML = myLibrary[myLibrary.length-1].pages;
// //    console.log(myLibrary[myLibrary.length-1].title);
//     if (document.getElementById('input-title').value == '' &&
//         document.getElementById('input-author').value == '' &&
//         document.getElementById('input-pages').value == '' ){
//             return
//         }
//     else {
//         let id = myLibrary.length
//         myLibrary.push(book);
//         console.log(typeof myLibrary[myLibrary.length-1].title);
//         let body = document.getElementById('books');
//         let card = document.createElement('div')
//         card.setAttribute('class', 'card')
//         card.setAttribute('id', `book-${id}`)
//         // button.id = id
        
//         let cardContent = document.createElement('div')
//         cardContent.setAttribute('id','cardContent' )
//         card.appendChild(cardContent)
//         let title = document.createElement('h2')
//         title.textContent = document.getElementById('input-title').value
//         cardContent.appendChild(title);
//         let author = document.createElement('p')
//         author.textContent = document.getElementById('input-author').value
//         cardContent.appendChild(author);
//         let pages = document.createElement('p')
//         pages.textContent = document.getElementById('input-pages').value
//         cardContent.appendChild(pages)
//         body.appendChild(card);
//         console.log(title);
//         console.log(title.textContent == myLibrary[0].title);
    
      
//       } 
      

//     console.log(myLibrary);
//     localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
// }

// // function Delete() {
// //     for (i=0; i<myLibrary.length-1; i++){
// //         if 
// //     } 
// // }


// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//   }












// // function Book(title,author,pages) {
// //     this.title = title
// //     this.author = author
// //     this.pages = pages
// //     this.info = function(){
// //         return `${title} by ${author}, ${pages} pages`
// //     }
// // }

// // let firstBook = new Book('The Hobbit', 'Polina Stamenova', 333);
// // firstBook.info()
// // console.log(firstBook.info());
// // let secondBook = new Book('The Elf', 'Jordy Garcia', 555);
// // secondBook.info()
// // console.log(secondBook.info());

// // let book = {
// //     title : 'The Hobbit',
// //     author : 'Carl Miles',
// //     pages : '333'
// // }




// // let mySAve = JSON.stringify(book.title)
// // console.log(typeof mySAve);
// // let newmySAve = localStorage.setItem('Book Title', mySAve)

// // let polina = JSON.parse(localStorage.getItem('Book Title'))
// // console.log(typeof polina);