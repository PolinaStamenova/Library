let body = document.getElementById('books');
let myLibrary = [];

//------ Create elements in HTML -----



function Book(bookTitle, bookAuthor, bookPages, randomIdNum){
   
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.id = randomIdNum
}

function addBookToLibrary(){
    
    let randomIdNum = randomId()
    let bookTitle = document.getElementById('input-title').value;
    let bookAuthor = document.getElementById('input-author').value;
    let bookPages = document.getElementById('input-pages').value;
    
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, randomIdNum))
    displayBook(bookTitle,bookAuthor,bookPages,randomIdNum,myLibrary);
    
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
    console.log(localStorage);
}

//The function generate a random number, used for id-name
function randomId() {
    return '_' + (
    Number(String(Math.random()).slice(2)) + 
    Date.now() + 
    Math.round(performance.now())
    ).toString(36);
}
//The function generate elements in HTML
function displayBook(bookTitle,bookAuthor,bookPages,randomIdNum,myLibrary){
    
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', `card-${randomIdNum}`);
    body.appendChild(card);

    // ------ Title text ----------
    let cardContent = document.createElement('div');
    cardContent.setAttribute('id','cardContent' );
    card.appendChild(cardContent);
    let title = document.createElement('h2');
    title.classList.add('title-style')
    title.setAttribute('id', `h2-${randomIdNum}`);
    title.textContent = bookTitle;
    cardContent.appendChild(title);

    // ------ Autor and pages text ----------
    let description = document.createElement('div');
    description.classList.add('description');
    cardContent.appendChild(description);

    let authorContent = document.createElement('div');
    authorContent.classList.add('author-content')
    description.appendChild(authorContent);
    let authorText = document.createElement('p');
    // authorText.classList.add('author-style')
    authorText.textContent = 'Author: '
    authorContent.appendChild(authorText);
    let author = document.createElement('p');
    // author.classList.add('author-style')
    author.setAttribute('id', `p1-${randomIdNum}`);
    author.textContent = bookAuthor;
    authorContent.appendChild(author);

    let pagesContent = document.createElement('div');
    pagesContent.classList.add('author-content')
    description.appendChild(pagesContent);
    let pagesText = document.createElement('p');
    pagesText.classList.add('pages-style')
    pagesText.textContent = 'Pages:';
    pagesContent.appendChild(pagesText);
    let pages = document.createElement('p');
    pages.classList.add('pages-style')
    pages.setAttribute('id', `p2-${randomIdNum}`);
    pages.textContent = bookPages;
    pagesContent.appendChild(pages);

    // ------ Settings buttons ----------
    let settings = document.createElement('div');
    settings.classList.add('settings');
    cardContent.appendChild(settings);

    let editButton = document.createElement('p');
    editButton.setAttribute('class', 'edit-button');
    editButton.setAttribute('id', `edit-${randomIdNum}`);
    editButton.textContent = 'Edit';
    editButton.addEventListener("click", () => {
        editBook(randomIdNum,editButton,updateButton)
    })
    settings.appendChild(editButton);

    let updateButton = document.createElement('p');
    updateButton.setAttribute('class', 'update-button');
    updateButton.setAttribute('id', `update-${randomIdNum}`);
    updateButton.textContent = 'Update';
    updateButton.addEventListener("click", () => {
        updateBook(updateButton,randomIdNum,editButton)
    })
    settings.appendChild(updateButton);

    let deleteButton = document.createElement('p');
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('id', `delete-${randomIdNum}`);
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", () => {
        deleteBook(deleteButton,card,body,myLibrary)
    })
    settings.appendChild(deleteButton);
}

function deleteBook(deleteButton,card,body,myLibrary){
    deleteButton.style.color = 'white';
    deleteButton.style.textShadow = '1px 1px 7px gold';
    //--------------------------------------------------
    let fire = document.createElement('img');
    fire.setAttribute('src', '..//images//fire.gif');
    fire.classList.add('fire');
    card.appendChild(fire);
    card.classList.add('burningBooksss');
    card.setAttribute("backgroundImage", "../image/smoke.gif")
    timerDelete();
    function timerDelete() {
        setTimeout(deteleItem, 3000);
    }
    function deteleItem() {

    body.removeChild(card)
        
        for (let k=0; k < myLibrary.length; k++){
            if (`delete-${myLibrary[k].id}` == deleteButton.id){
                myLibrary.splice(k,1)
                console.log(myLibrary);
            }
        }
        localStorage.clear();
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
    }
}
function editBook(randomIdNum,editButton,updateButton){
    
    editButton.style.color = 'white';
    editButton.style.textShadow = '1px 1px 7px gold';
    timer();
    function timer() {
        setTimeout(changeColor, 10000);
    }
    function changeColor() {
        updateButton.style.color = 'white';
        updateButton.style.textShadow = '1px 1px 7px gold';
        editButton.style.color = 'rgb(202, 195, 132)';
        editButton.style.textShadow = 'none';
    }
    
    let changedTitle = document.getElementById(`h2-${randomIdNum}`);
    changedTitle.contentEditable = true;
    let changedAuthor = document.getElementById(`p1-${randomIdNum}`);
    changedAuthor.contentEditable = true;
    let changedPages = document.getElementById(`p2-${randomIdNum}`);
    changedPages.contentEditable = true;
}

function updateBook(updateButton,randomIdNum,editButton){ 
    editButton.style.color = 'rgb(202, 195, 132)';
    editButton.style.textShadow = 'none';
    updateButton.style.color = 'rgb(202, 195, 132)';
    updateButton.style.textShadow = 'none';

    for (let k=0; k < myLibrary.length; k++){
        if (`update-${myLibrary[k].id}` == updateButton.id){
            myLibrary[k].bookTitle = document.getElementById(`h2-${randomIdNum}`).innerHTML;
            myLibrary[k].bookAuthor = document.getElementById(`p1-${randomIdNum}`).innerHTML;
            myLibrary[k].bookPages = document.getElementById(`p2-${randomIdNum}`).innerHTML;
            console.log(myLibrary);
        }
    }
    localStorage.clear();
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
}
myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

if (localStorage.getItem('myLibrary') == null){
    localStorage.setItem('myLibrary', '[]')
}  
else if (localStorage.getItem('myLibrary') !== null) {
    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i].bookTitle,myLibrary[i].bookAuthor,myLibrary[i].bookPages,myLibrary[i].id,myLibrary)
    }
}


function createBook() {
  
    let inputs = document.createElement('div');
    inputs.classList.add('inputs');
    document.body.appendChild(inputs);

    let displayNone = document.createElement('img');
    displayNone.setAttribute('src', '..//images//xxx.png');
    displayNone.classList.add('display-none');
    displayNone.addEventListener("click", () => {
        inputs.remove();
    })
    inputs.appendChild(displayNone)  

    let inputsContetn = document.createElement('div');
    inputsContetn.classList.add("input-content")
    inputs.appendChild(inputsContetn);

    let inputTitleText = document.createElement('p');
    inputTitleText.textContent = "title :"
    inputsContetn.appendChild(inputTitleText);
    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('id','input-title');
    inputTitle.type = "text";
    inputsContetn.appendChild(inputTitle);
    inputTitle.addEventListener("focus", () => {
        onFocus(inputTitleText);
    })
    inputTitle.addEventListener("focusout", () => {
        onFocusOut(inputTitleText);
    })


    let inputAuthorText = document.createElement('p');
    inputAuthorText.textContent = "Author :"
    inputsContetn.appendChild(inputAuthorText);
    let inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('id','input-author');
    inputAuthor.type = "text";
    inputsContetn.appendChild(inputAuthor);
    inputAuthor.addEventListener("focus", () => {
        onFocus(inputAuthorText);
    })
    inputAuthor.addEventListener("focusout", () => {
        onFocusOut(inputAuthorText);
    })

    let inputPagesText = document.createElement('p');
    inputPagesText.textContent = "Pages :"
    inputsContetn.appendChild(inputPagesText);
    let inputPages = document.createElement('input');
    inputPages.setAttribute('id','input-pages');
    inputPages.type = "text";
    inputsContetn.appendChild(inputPages);
    inputPages.addEventListener("focus", () => {
        onFocus(inputPagesText);
    })
    inputPages.addEventListener("focusout", () => {
        onFocusOut(inputPagesText);
    })
    
    
    let wax = document.createElement('div');
    wax.classList.add('wax');
    inputsContetn.appendChild(wax)


    let addBookButton = document.createElement('img');
    addBookButton.setAttribute('src', '..//images//wax stamp.png');
    addBookButton.classList.add('add-book-button');
    addBookButton.addEventListener("click", () => {
        addBookToLibrary()
      });
    wax.appendChild(addBookButton);
    let waxText = document.createElement('p');
    waxText.textContent = 'Click to add the book to the library!';
    wax.appendChild(waxText);
}


// <!-- <div class="inputs">
//       <input id="input-title" type="text" placeholder="Title" />
//       <input id="input-author" type="text" placeholder="Author" />
//       <input id="input-pages" type="text" placeholder="Number of pages" />
//     </div>
//     <div class="buttons">
//       <button type="button" onclick="addBookToLibrary()">NEW BOOK</button>
//     </div> -->


function onFocus(text) {
    text.style.color = 'white';
    text.style.textShadow = '1px 1px 7px gold';
}

function onFocusOut(textOut){
    textOut.style.color = '#000';
    textOut.style.textShadow = 'none';
}

// function displayNone() {
//     document.getElementsByClassName('inputs').style.display = 'none';
// }