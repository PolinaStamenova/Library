window.onload=function(){
    document.getElementById("audio-sound").play();
  }

let body = document.getElementById('books');
let myLibrary = [];
let status = false
//------ Create elements in HTML -----
let array = []


function Book(bookTitle, bookAuthor, bookPages, randomIdNum, status=false){
   
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.id = randomIdNum
    this.status = status
}

function addBookToLibrary(){
    
    let randomIdNum = randomId()
    let bookTitle = document.getElementById('input-title').value;
    let bookAuthor = document.getElementById('input-author').value;
    let bookPages = document.getElementById('input-pages').value;
    let status = false;
    if (bookTitle ===  '' || bookTitle == null ||
        bookAuthor ===  '' || bookAuthor == null ||
        bookPages ===  '' || bookPages == null){
        return
    }
    else {
      myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, randomIdNum, status))
    displayBook(bookTitle,bookAuthor,bookPages,randomIdNum,status,myLibrary);
    document.getElementById('input-title').value = ""
     document.getElementById('input-author').value = ""
    document.getElementById('input-pages').value = ""
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
    }
    
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
function displayBook(bookTitle,bookAuthor,bookPages,randomIdNum,status,myLibrary){
    
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
        editBook(randomIdNum,editButton,updateButton);
        
    })
    settings.appendChild(editButton);

    let updateButton = document.createElement('p');
    updateButton.setAttribute('class', 'update-button');
    updateButton.setAttribute('id', `update-${randomIdNum}`);
    updateButton.textContent = 'Update';
    updateButton.addEventListener("click", () => {
        updateBook(updateButton,randomIdNum,title,author,pages)
    })
    settings.appendChild(updateButton);
//TOGGleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    let readButton = document.createElement("p");
    readButton.textContent = 'Not read';
    readButton.classList.add("notRead");
    readButton.id = `status-${randomIdNum}`;
    card.appendChild(readButton);

   
    let hatOne = document.createElement('img');
    hatOne.setAttribute('src', "images/hat.png");
    hatOne.classList.add("hat-style");
    if(status == false){
        hatOne.classList.add("hat-show");
        readButton.textContent = 'Not read';
        
    }
    else if (status == true) {
        readButton.textContent = 'Read';
        card.style.opacity = '0.5';
    } 
    card.appendChild(hatOne);
    
    
    function checkPressed() { 
        if (status == false){
            status = true;
            readButton.textContent = 'Read';
            card.style.opacity = '0.5';
            for (let k=0; k < myLibrary.length; k++){
                if (`status-${myLibrary[k].id}` == readButton.id){
                    myLibrary[k].status = status
                    console.log(myLibrary[k]);
                    localStorage.clear();
                    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
                }}  
        }
        else {
            readButton.textContent = 'Not read';
            card.style.opacity = '1';
            status = false
            for (let n=0; n < myLibrary.length; n++){
                if (`status-${myLibrary[n].id}` == readButton.id){
                    myLibrary[n].status = status
                    localStorage.clear();
                    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
                    console.log(myLibrary[n]);
                }}  
        }
        // localStorage.clear();
        // localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
        
        
    }
    readButton.addEventListener('click', () => {
        checkPressed();
        hatOne.classList.toggle("hat-show")
        
    })
    

    let deleteButton = document.createElement('p');
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('id', `delete-${randomIdNum}`);
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", () => {
        deleteBook(deleteButton,card,body,myLibrary,cardContent,hatOne,readButton)
    })
    settings.appendChild(deleteButton);

    

}

function deleteBook(deleteButton,card,body,myLibrary,cardContent,hatOne,readButton){
    deleteButton.style.color = 'white';
    deleteButton.style.textShadow = '1px 1px 7px gold';
    let fire = document.createElement('img');
    fire.setAttribute('src', 'images//smoke.gif');
    fire.classList.add('smoke');
    card.appendChild(fire);
    card.classList.add('burningBooksss');

    time ()
    
    function time (){
        setTimeout(smoke, 3000);
    }
    function smoke() {
        card.classList.remove('burningBooksss');
        card.style.backgroundImage = 'none';
        card.removeChild(cardContent);

        hatOne.style.display = 'none';
        readButton.style.display = "none";
        let smoke = document.createElement('img');
        smoke.setAttribute('src', 'images//smoke.gif');
        smoke.classList.add('smoke');
        card.appendChild(smoke);  
    }
    

    timerDelete();
    function timerDelete() {
        setTimeout(deteleItem, 7000);
    }
    function deteleItem() {

    body.removeChild(card)
        
        for (let k=0; k < myLibrary.length; k++){
            if (`delete-${myLibrary[k].id}` == deleteButton.id){
                myLibrary.splice(k,1)
                
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
        setTimeout(changeColor, 2000);
    }
    function changeColor() {
        editButton.classList.add('edit-button')
        updateButton.style.color = 'white';
        updateButton.style.textShadow = '1px 1px 7px gold';
        editButton.style.color = 'rgba(202, 195, 132, 0.466)';
        editButton.style.textShadow = 'none';
    }
    
    let changedTitle = document.getElementById(`h2-${randomIdNum}`);
    changedTitle.contentEditable = true;
    let changedAuthor = document.getElementById(`p1-${randomIdNum}`);
    changedAuthor.contentEditable = true;
    let changedPages = document.getElementById(`p2-${randomIdNum}`);
    changedPages.contentEditable = true;
}

function updateBook(updateButton,randomIdNum,title,author,pages){ 
   
    updateButton.style.color = 'rgba(202, 195, 132, 0.466)';
    updateButton.style.textShadow = 'none';

    title.contentEditable = false;
    author.contentEditable = false;
    pages.contentEditable = false;
    
    for (let k=0; k < myLibrary.length; k++){
        if (`update-${myLibrary[k].id}` == updateButton.id){
            myLibrary[k].bookTitle = document.getElementById(`h2-${randomIdNum}`).innerHTML;
            myLibrary[k].bookAuthor = document.getElementById(`p1-${randomIdNum}`).innerHTML;
            myLibrary[k].bookPages = document.getElementById(`p2-${randomIdNum}`).innerHTML;
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
        displayBook(myLibrary[i].bookTitle,myLibrary[i].bookAuthor,myLibrary[i].bookPages,myLibrary[i].id,myLibrary[i].status,myLibrary);
    }
}


function createBook() {

    document.getElementById('cover-ink').style.display = "block";

    document.getElementById('cover').style.display = 'block';
    let inputs = document.createElement('div');
    inputs.classList.add('inputs');
    inputs.classList.add('fade-in');
    inputs.setAttribute("action", "/");
    inputs.setAttribute("method", "GET");
    document.body.appendChild(inputs);
    

    let owl = document.createElement("img");
    owl.setAttribute('src', 'images//own.gif');
    owl.id = "owl-gif";
    inputs.appendChild(owl);

    let displayNone = document.createElement('img');
    displayNone.setAttribute('src', 'images//xxx.png');
    displayNone.classList.add('display-none');
    displayNone.addEventListener("click", () => {

        inputs.classList.add('fade-out');
       
        setTimeout(function(){
            document.getElementById('cover-ink').style.display = "none";
            document.getElementById('cover').style.display = 'none';
            inputs.remove(); 
        }, 3000);
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
    inputTitle.classList.add('inputs-style');
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
    inputAuthor.classList.add('inputs-style');
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
    inputPages.classList.add('inputs-style');
    inputPages.type = "text";
    inputsContetn.appendChild(inputPages);
    inputPages.addEventListener("focus", () => {
        onFocus(inputPagesText);
    })
    inputPages.addEventListener("focusout", () => {
        onFocusOut(inputPagesText);
    })
    
    document.getElementById("ink-feather").addEventListener("click",()=>{
        document.getElementById("hello").classList.add("othertesting")
    })
    let wax = document.createElement('div');
    wax.classList.add('wax');
    inputsContetn.appendChild(wax)


    let addBookButton = document.createElement('input');
    addBookButton.setAttribute("type", "image");
    addBookButton.setAttribute('src', 'images//wax stamp.png');
    addBookButton.style.outline = "none";
    addBookButton.classList.add('add-book-button');
    inputs.appendChild(addBookButton);
    addBookButton.addEventListener("click", () => {
        
            if (inputTitle.value === '' || inputTitle.value == null ||
                inputAuthor.value === '' || inputAuthor.value == null ||
                inputPages.value === '' || inputPages.value == null){
                // e.preventDefault();
                inputTitle.placeholder = "Title is requared!";
                inputAuthor.placeholder = "Authoris requared!";
                inputPages.placeholder = "Pages are requared!";
            }
            else {
                // e.preventDefault();
                inputs.classList.add('fade-out');  
                setTimeout(function(){
                document.getElementById('cover-ink').style.display = "none";
                document.getElementById('cover').style.display = 'none';
                inputs.remove(); 
                }, 3000);
                setTimeout(addBookToLibrary, 1000)
               
            }   
    });
    
    wax.appendChild(addBookButton);
    let waxText = document.createElement('p');
    waxText.textContent = 'Click to add the book to the library!';
    wax.appendChild(waxText);
}

function onFocus(text) {
    text.style.color = 'white';
    text.style.textShadow = '1px 1px 7px gold';
}

function onFocusOut(textOut){
    textOut.style.color = '#000';
    textOut.style.textShadow = 'none';
}
