var gBooks = []
var gId = 0


$(init)

function init(){
    createBooks()
    renderBooks()
}

function renderBooks(){



    var elTable = document.querySelector('table')
    elTable.innerHTML = ''

    elTable.innerHTML += `<tr><th>id</th><th>name</th><th>price</th><th>rate</th><th colspan="3">action</th></tr>`

    gBooks.forEach(book => {
        elTable.innerHTML += 
        `<tr><td>${book.id}</td><td>${book.tittle}</td><td>${book.price}$<td>${book.rate}</td>
        <td><button name="${book.tittle}" type="read" onclick="onClicked(this)" class="btn-read">Read</button></td>
        <td><button name="${book.tittle}" type="upgrade" onclick="onClicked(this)" class="btn-upgrade">Upgrade</button></td>
        <td><button name="${book.tittle}" type="delete" onclick="onClicked(this)" class="btn-delete">Delete</button></td>
        </tr>`
        
    });

}

function onClicked(btn){

    

    if(btn.className == 'btn-read') onReadBook(btn.name)
    if(btn.className == 'btn-upgrade') onUpdateBook(btn.name)
    if(btn.className == 'btn-delete') deleteBook(btn.name)





}

function createBooks(){

    _createBookToshow()

}

function onAddBook(){

    bookName = prompt('enter book name')
    bookPrice = +prompt('enter the price')


    addBook(bookName, bookPrice)
    
}

function onUpdateBook (bookName){

    var bookToUpdate = gBooks.find(book=> book.tittle === bookName)

    UpdateBook(bookToUpdate.id)
}

function onReadBook(bookName){

    elModal = document.querySelector('.modal')
    elModal.classList.add('open')

    var bookIdx = gBooks.findIndex(book => book.tittle === bookName)

    elModal.innerHTML = 
    `<h3>${bookName}</h3>
    <button onclick="addRaiting(${bookIdx})">+</button>
    ${gBooks[bookIdx].rate}
    <button onclick="minRaiting(${bookIdx})">-</button>

    <button onclick="btnCloseModal()">close</button>
    
    
    `

}

function btnCloseModal(){
    elModal = document.querySelector('.modal')
    elModal.classList.remove('open')


}

function onChangeLang(value){

    if(value === 'English') var lang = 'en'
    else var lang = 'he'
    getlang(lang)

    doTranslate(lang)

}



